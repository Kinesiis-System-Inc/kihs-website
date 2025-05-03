/* eslint-disable  @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Get the form data submitted as FormData
    const formData = await req.formData();
    
    // Extract the file and form fields
    const file = formData.get('curriculumVitae') as File | null;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const introduction = formData.get('introduction') as string;
    const linkedinUrl = formData.get('linkedinUrl') as string;
    const portfolioLink = formData.get('portfolioLink') as string;
    const jobTitle = formData.get('title') as string;

    // Validate required fields
    if (!firstName || !lastName || !email || !phoneNumber || !introduction) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Set up the email transporter
    const transporter = createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Build the email HTML content
    const emailHtml = `
      <h2>New Job Application for: ${jobTitle}</h2>
      <h3>Applicant Details</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phoneNumber}</p>
      ${linkedinUrl ? `<p><strong>LinkedIn:</strong> <a href="${linkedinUrl}">${linkedinUrl}</a></p>` : ''}
      ${portfolioLink ? `<p><strong>Portfolio:</strong> <a href="${portfolioLink}">${portfolioLink}</a></p>` : ''}
      
      <h3>Introduction</h3>
      <p>${introduction.replace(/\n/g, '<br>')}</p>
    `;

    // Setup the email options
    const mailOptions: any = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL || 'karan.bhosale@kinesiis.in',
      subject: `Job Application: ${jobTitle} - ${firstName} ${lastName}`,
      html: emailHtml,
    };

    // If a CV file was provided, convert it to buffer and attach it
    if (file) {
      const buffer = await file.arrayBuffer();
      
      mailOptions.attachments = [
        {
          filename: file.name,
          content: Buffer.from(buffer),
          contentType: file.type,
        },
      ];
    }

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing job application:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process your application. Please try again later.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}