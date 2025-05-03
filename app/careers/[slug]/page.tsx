// app/careers/[slug]/page.tsx
import { client } from '@/sanity/lib/client'
import { FaLocationDot } from 'react-icons/fa6'
import { MdWork } from 'react-icons/md'
import ApplicationForm from '@/Components/Career/ApplicationForm'

interface JobData {
  title: string
  location: string
  jobType: string
  description: string
  expectations: string[]
  whatYouWillDo: string[]
  imageUrl?: string
}

// (re-enable this if you want true SSG)
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = await client.fetch<string[]>(
    `*[_type == "jobPosting"].slug.current`
  )
  return slugs.map((slug) => ({ slug }))
}

// Because Next now hands you `params` as a Promise<…>, we type it accordingly:
type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {
  // ← must await here!
  const { slug } = await params

  const job = await client.fetch<JobData>(
    `*[_type == "jobPosting" && slug.current == $slug][0]{
       title,
       location,
       jobType,
       description,
       expectations,
       whatYouWillDo,
       "imageUrl": mainImage.asset->url
     }`,
    { slug }
  )

  if (!job) {
    return <div className="p-10 text-center">Job not found</div>
  }

  return (
    <main className="w-full min-h-[70vh] flex flex-col gap-24">
      {/* Header */}
      <section className="w-full px-4 md:pt-20 md:px-24 lg:px-32">
        <p className="text-sm text-blue-500 mb-1">
          Careers at Kullolli Institute of Health Services (KIHS)
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          {job.title}
        </h2>
        <div className="flex gap-4 items-center my-2">
          <span className="flex gap-2 items-center">
            <FaLocationDot color="#FBD115" />
            {job.location}
          </span>
          <span className="flex gap-2 items-center">
            <MdWork color="#FBD115" />
            {job.jobType}
          </span>
        </div>
        <p className="text-customGrey text-[14px] mb-6">
          {job.description}
        </p>
      </section>

      {/* What you will do */}
      <section className="md:px-32 w-full">
        <div className="w-full min-h-[100px] bg-bgBlue rounded-2xl flex flex-col-reverse gap-8 md:flex-row items-center justify-center px-4 py-8 md:p-0 md:pl-16">
          <div className="flex flex-col gap-4">
            <div className="pr-28 flex flex-col gap-3">
              <h2 className="font-semibold text-4xl">What you will do…</h2>
              <ul className="list-disc ml-12 text-[14px] text-[#1E1E1E]">
                {job.whatYouWillDo.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            {job.imageUrl && (
              <img
                src={job.imageUrl}
                alt={job.title}
                className="w-full md:w-[30vw]"
              />
            )}
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="w-full flex flex-col gap-8 px-4 md:px-24 lg:px-32">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          We expect you to have...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {job.expectations.map((exp, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white border-2 border-ligthGrey rounded-lg px-4 py-2 hover:bg-gray-100 transition-all"
            >
              <img src="/handWithPlus.png" alt="icon" className="w-12 h-12" />
              <span className="text-[16px] font-semibold">{exp}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-secondaryTint py-16">
        <ApplicationForm title={job.title} />
      </section>
    </main>
  )
}
