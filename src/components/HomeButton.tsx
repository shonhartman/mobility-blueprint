import Link from 'next/link'
import React from 'react'

const HomeButton: React.FC = () => {
  return (
    <Link href="/dashboard">
      <button className="absolute top-4 right-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900">
        Dashboard
      </button>
    </Link>
  )
}

export default HomeButton