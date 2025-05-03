import { NextResponse } from 'next/server'
import { createTransport } from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { firstName, lastName, email, phone, services, message } = body

    const transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'karan.bhosale@kinesiis.in', // your receiving email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>Contact Details</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Services Interested In:</strong> ${services.join(', ')}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
