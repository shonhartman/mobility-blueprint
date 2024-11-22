'use client'

import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const router = useRouter()

  const linkToConditioning = () => {
    router.push('/conditioning')
  }

  const linkToRestorative = () => {
    router.push('/restorative')
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 transition-all duration-300 sm:p-6 md:p-8">
        {/* HEADER */}
        <div className="mb-6 flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-700">
              Good Morning Shaun! 🌞
            </h1>
            <p className="text-gray-500">Welcome back!</p>
          </div>
        </div>

        {/* DASHBOARD WIDGETS */}

        {/* EXERCISE SECTIONS */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Conditioning Section */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">
              Conditioning
            </h2>
            <div className="mt-4">
              <button
                onClick={linkToConditioning}
                className="inline-block rounded bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400"
              >
                See All
              </button>
            </div>
            <hr className="my-4 border-t-2 border-black" />
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <ActivityCard
                  key={`conditioning-${i}`}
                  title={`Conditioning ${i + 1}`}
                  value=""
                  bgColor="bg-blue-400"
                />
              ))}
            </div>
          </div>

          {/* Restorative Section */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Restorative</h2>
            <div className="mt-4">
              <button
                onClick={linkToRestorative}
                className="inline-block rounded bg-purple-500 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-400"
              >
                See All
              </button>
            </div>
            <hr className="my-4 border-t-2 border-black" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <ActivityCard
                  key={`restorative-${i}`}
                  title={`Restorative ${i + 1}`}
                  value=""
                  bgColor="bg-purple-400"
                />
              ))}
            </div>
          </div>
        </div>

        {/* MONTHLY PROGRESS */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">
            Monthly Progress
          </h2>
          <div className="mt-4 h-40 rounded-md bg-gray-200"></div>
        </div>
      </main>
    </div>
  )
}

const ActivityCard = ({
  title,
  value,
  bgColor,
}: {
  title: string
  value: string
  bgColor: string
}) => {
  return (
    <div className={`rounded-lg p-4 text-white shadow-md ${bgColor}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  )
}

export default Dashboard
