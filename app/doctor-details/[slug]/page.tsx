import { client } from '@/sanity/lib/client'
import { Mail } from 'lucide-react'

interface DoctorData {
  name: string
  title: string
  imageUrl: string
  phone?: string
  subtitle?: string
  education?: string
  training?: string
  statistics?: string[]
  timings?: { day: string; timing: string }[]
}

// 1) Generate slugs for SSG
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = await client.fetch<string[]>(
    `*[_type == "doctor"].slug.current`
  )
  return slugs.map((slug) => ({ slug }))
}

// 2) PageProps must match Next's async params
type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {
  // await dynamic params before use
  const { slug } = await params

  const doctor = await client.fetch<DoctorData>(
    `*[_type == "doctor" && slug.current == $slug][0] {
      name,
      title,
      "imageUrl": image.asset->url,
      phone,
      subtitle,
      education,
      training,
      statistics,
      timings
    }`,
    { slug }
  )

  if (!doctor) {
    return (
      <div className="text-center mt-20">
        No doctor found for slug: {slug}
      </div>
    )
  }

  // ensure we have an array for statistics
  const statistics = doctor.statistics ?? []
  const timings = doctor.timings ?? []

  return (
    <div>
      {/* Profile Section */}
      <section className="w-full flex flex-col gap-8 px-4 md:px-24 lg:px-32">
        <div>
          <p className="text-xl text-blue-500 mb-1">Doctor Details</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <img
            src={doctor.imageUrl}
            alt={doctor.name}
            className="w-full md:w-80 md:h-80 object-cover rounded-lg"
          />
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl font-bold">{doctor.name}</h2>
            <p className="text-xl font-bold mt-5">{doctor.title}</p>
            {timings?.length > 0 && (
              <div className="my-4">
                <a href="#" className="text-sm text-blue-600 mb-2 py-3">
                  OPD Timing
                </a>
                <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-primary1 text-white text-left rounded-t-lg">
                      <th className="py-3 px-4 first:rounded-tl-lg">Day</th>
                      <th className="py-3 px-4 last:rounded-tr-lg">Timing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timings.map((timing, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-4 font-medium">{timing.day}</td>
                        <td className="py-3 px-4">{timing.timing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}



            {doctor.phone && (
              <div className="flex items-center gap-2 bg-gray-100 text-sm px-3 py-2 rounded-md w-fit mb-2">
                <Mail className="h-4 w-4 text-gray-600" />
                <span>{doctor.phone}</span>
              </div>
            )}
            {doctor.subtitle && (
              <p className="mt-2 italic text-sm text-gray-600">
                {doctor.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Education, Training, Statistics */}
      <section className="w-full flex flex-col gap-8 px-6 md:px-24 lg:px-32">
        {doctor.education && (
          <div className="mt-12 w-full bg-yellow-100 p-8 rounded-md">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-sm text-gray-800">{doctor.education}</p>
          </div>
        )}

        {doctor.training && (
          <div className="mt-6 w-full p-6 rounded-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Training
            </h3>
            <p className="text-sm text-gray-700">{doctor.training}</p>
          </div>
        )}

        {statistics.length > 0 && (
          <div className="mt-6 w-full bg-blue-100 p-8 rounded-md">
            <h3 className="text-xl font-semibold mb-4">Statistics</h3>
            <div className="text-sm text-gray-800 space-y-1">
              {statistics.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
