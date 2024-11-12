'use client'

import { useEffect, useState } from 'react'
import {
  FaDumbbell,
  FaChartLine,
  FaUtensils,
  FaBullseye,
  FaCalendarAlt,
  FaBolt,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true)
      } else {
        setIsCollapsed(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Check initial window width

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <aside
        className={`transition-width flex flex-col space-y-4 border-r border-gray-200 bg-white p-6 duration-300 ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {/* TOGGLE BUTTON */}
        <button
          onClick={toggleSidebar}
          className="flex items-center self-end text-gray-600 hover:text-blue-500 focus:outline-none"
        >
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>

        {/* TITLE AND LOGO */}
        <Link
          href="/"
          className={`flex items-center text-blue-500 ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          <FaDumbbell className="text-xl" />
          {!isCollapsed && (
            <h2 className="ml-2 whitespace-nowrap text-xl font-bold">
              Mobility Blueprint
            </h2>
          )}
        </Link>

        {/* SIDEBAR NAV LINKS */}
        <nav className="mt-8 space-y-4">
          <SidebarLink
            href="/dashboard"
            icon={<FaChartLine />}
            label="Dashboard"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            href="/exercises"
            icon={<FaBolt />}
            label="Exercises"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            href="/diet-plan"
            icon={<FaUtensils />}
            label="Diet Plan"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            href="/goals"
            icon={<FaBullseye />}
            label="Goals"
            isCollapsed={isCollapsed}
          />
          <SidebarLink
            href="/schedule"
            icon={<FaCalendarAlt />}
            label="My Schedule"
            isCollapsed={isCollapsed}
          />
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 transition-all duration-300">
        {/* TOP NAVBAR */}
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

        {/* DASHBOARD WIDGETS */}
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ActivityCard title="Workout" value="4 hrs" bgColor="bg-blue-500" />
          <ActivityCard
            title="Calories"
            value="1800 kcal"
            bgColor="bg-orange-500"
          />
          <ActivityCard
            title="Steps"
            value="2200 steps"
            bgColor="bg-purple-500"
          />
        </div>

        {/* GOAL PROGRESS */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Goal Progress</h2>
          <div className="mt-4 h-40 rounded-md bg-gray-200"></div>
        </div>

        {/* FOOD LOG */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Food Log</h2>
          <table className="mt-4 w-full">
            <thead>
              <tr>
                <th className="text-left text-gray-500">Food</th>
                <th className="text-left text-gray-500">Meal</th>
                <th className="text-left text-gray-500">Calories</th>
              </tr>
            </thead>
            <tbody>
              <FoodLogItem food="Burrito" meal="Lunch" calories="350" />
              <FoodLogItem food="Pizza" meal="Dinner" calories="500" />
            </tbody>
          </table>
        </div>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="w-80 space-y-6 bg-gray-50 p-6">
        {/* UPCOMING EXERCISES */}
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">
            Upcoming Exercises
          </h2>
          <div className="mt-4 space-y-4">
            <ScheduleItem day="Monday" activity="Stretch" time="08:00 AM" />
            <ScheduleItem
              day="Tuesday"
              activity="Back Stretch"
              time="08:00 AM"
            />
            <ScheduleItem day="Wednesday" activity="Yoga" time="08:00 AM" />
          </div>
        </div>

        {/* WEEKLY GOALS */}
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">
            This Week's Goals
          </h2>
          <div className="mt-4 space-y-4">
            <GoalItem goal="Running on Track" details="4 Rounds" />
            <GoalItem goal="Push Ups" details="50 Reps" />
          </div>
        </div>

        {/* PROMOTION */}
        <div className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-center text-white shadow-md">
          <p className="text-lg font-semibold">50% Off Premium Membership</p>
          <p className="mt-2 text-sm">
            Unlock exclusive workouts and diet plans.
          </p>
          <button className="mt-4 rounded-lg bg-orange-500 px-6 py-2 font-medium text-white">
            Upgrade Now
          </button>
        </div>
      </aside>
    </div>
  )
}

interface SidebarLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  isCollapsed: boolean
}

const SidebarLink = ({ href, icon, label, isCollapsed }: SidebarLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-3 px-4 py-2 transition-colors ${
          isCollapsed ? 'justify-center' : 'justify-start'
        } ${
          isActive
            ? 'bg-blue-200 text-blue-700'
            : 'text-gray-700 hover:bg-blue-100 hover:text-blue-500'
        }`}
      >
        <div className="text-lg">{icon}</div>
        {!isCollapsed && <span className="font-medium">{label}</span>}
      </div>
    </Link>
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

const ScheduleItem = ({
  day,
  activity,
  time,
}: {
  day: string
  activity: string
  time: string
}) => {
  return (
    <div className="mt-2 flex items-center justify-between text-gray-600">
      <div>
        <p>{day}</p>
        <p className="text-sm">{activity}</p>
      </div>
      <span className="text-gray-400">{time}</span>
    </div>
  )
}

const GoalItem = ({ goal, details }: { goal: string; details: string }) => {
  return (
    <div className="mt-2 flex items-center justify-between text-gray-600">
      <span>{goal}</span>
      <span className="text-gray-400">{details}</span>
    </div>
  )
}

const FoodLogItem = ({
  food,
  meal,
  calories,
}: {
  food: string
  meal: string
  calories: string
}) => {
  return (
    <tr className="text-gray-700">
      <td className="py-2">{food}</td>
      <td>{meal}</td>
      <td>{calories}</td>
    </tr>
  )
}

export default Dashboard
