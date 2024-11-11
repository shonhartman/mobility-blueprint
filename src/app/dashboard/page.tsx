'use client'

import {
  FaDumbbell,
  FaChartLine,
  FaUtensils,
  FaBullseye,
  FaCalendarAlt,
  FaBolt,
} from 'react-icons/fa'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}

      <aside className="w-64 space-y-4 bg-white p-6">
        <Link href="/" className="flex items-center text-blue-500">
          <h2 className="text-xl font-bold">
            Mobility Blueprint <FaDumbbell className="inline text-xl" />
          </h2>
        </Link>
        <nav className="mt-8 space-y-4">
          <SidebarLink
            href="/dashboard"
            icon={<FaChartLine />}
            label="Dashboard"
          />
          <SidebarLink href="/exercises" icon={<FaBolt />} label="Exercises" />
          <SidebarLink
            href="/diet-plan"
            icon={<FaUtensils />}
            label="Diet Plan"
          />
          <SidebarLink href="/goals" icon={<FaBullseye />} label="Goals" />
          <SidebarLink
            href="/schedule"
            icon={<FaCalendarAlt />}
            label="My Schedule"
          />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top Navbar */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-700">
              Good Morning Shaun!
            </h1>
            <p className="text-gray-500">Welcome back!</p>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="rounded-lg border border-gray-300 px-4 py-2"
          />
        </div>
      </main>
    </div>
  )
}

interface SidebarLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

const SidebarLink = ({ href, icon, label }: SidebarLinkProps) => {
  const pathname = usePathname()
  const isActive =
    pathname === href || (pathname === '/' && href === '/overview')

  return (
    <Link href={href}>
      <div
        className={`flex cursor-pointer items-center gap-3 px-4 py-2 transition-colors ${
          isActive
            ? 'bg-blue-200 text-blue-700'
            : 'text-gray-700 hover:bg-blue-100 hover:text-blue-500'
        }`}
      >
        <div className="text-lg">{icon}</div>
        <span className="font-medium">{label}</span>
      </div>
    </Link>
  )
}

/* ACTIVITY CARD */
function ActivityCard({
  title,
  value,
  bgColor,
}: {
  title: string
  value: string
  bgColor: string
}) {
  return (
    <div className={`rounded-lg p-4 text-white shadow-md ${bgColor}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  )
}

export default Dashboard
