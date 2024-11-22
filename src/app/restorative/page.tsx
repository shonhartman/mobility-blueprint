'use client'

import { useRouter } from 'next/navigation'

const linesOfMovement = [
  { name: 'Lateral Line', route: '/restorative/lateral-lines' },
  { name: 'Inner Line', route: '/restorative/inner-lines' },
  { name: 'Front Line', route: '/restorative/front-line' },
  { name: 'Back Line', route: '/restorative/back-line' },
  { name: 'Spiral Line', route: '/restorative/spiral-lines' },
]

export default function RestorativePage() {
  const router = useRouter()

  const handleNavigation = (route: string) => {
    router.push(route)
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Restorative</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {linesOfMovement.map((line) => (
          <button
            key={line.name}
            onClick={() => handleNavigation(line.route)}
            className="rounded-lg bg-purple-400 p-6 text-center text-white shadow-md hover:bg-purple-500 hover:shadow-lg"
          >
            {line.name}
          </button>
        ))}
      </div>
    </div>
  )
}
