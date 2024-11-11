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

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
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

        {/* DASHBOARD WIDGET */}
        <div className="mb-6 grid grid-cols-3 gap-6">
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
        {/* Goal Progress */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Goal Progress</h2>
          {/* Placeholder for a bar chart */}
          <div className="mt-4 h-40 rounded-md bg-gray-200"></div>
        </div>

        {/* Food Log */}
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
      {/* Right Sidebar */}
      <aside className="w-80 bg-gray-50 p-6">
        {/* My Schedule */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700">My Schedule</h2>
          <ScheduleItem day="Monday" activity="Stretch" time="08:00" />
          <ScheduleItem day="Tuesday" activity="Back Stretch" time="08:00" />
          <ScheduleItem day="Wednesday" activity="Yoga" time="08:00" />
        </div>

        {/* Goals */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700">Goals</h2>
          <GoalItem goal="Running on Track" details="4 Rounds" />
          <GoalItem goal="Push Ups" details="50 Pieces" />
        </div>

        {/* Promotion */}
        <div className="rounded-lg bg-blue-100 p-4 text-center">
          <p className="font-medium text-gray-700">
            50% off on Premium Membership
          </p>
          <button className="mt-4 rounded-lg bg-orange-500 px-4 py-2 text-white">
            Upgrade
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

/* FOOD LOG */
function FoodLogItem({
  food,
  meal,
  calories,
}: {
  food: string
  meal: string
  calories: string
}) {
  return (
    <tr className="text-gray-700">
      <td className="py-2">{food}</td>
      <td>{meal}</td>
      <td>{calories}</td>
    </tr>
  )
}
/* SCHEDULE ITEMS */
function ScheduleItem({
  day,
  activity,
  time,
}: {
  day: string
  activity: string
  time: string
}) {
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

/* GOAL ITEMS */
function GoalItem({ goal, details }: { goal: string; details: string }) {
  return (
    <div className="mt-2 flex items-center justify-between text-gray-600">
      <span>{goal}</span>
      <span className="text-gray-400">{details}</span>
    </div>
  )
}

export default Dashboard
