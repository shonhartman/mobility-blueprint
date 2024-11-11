'use client'

// const Dashboard = () => {
//   return (
//     <div className="custom-grid-rows grid grid-cols-1 gap-10 p-4 pb-4 text-center text-2xl font-bold text-blue-600 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto">
//       Dashboard
//     </div>
//   )
// }

// app/page.tsx

import {
  FaDumbbell,
  FaChartLine,
  FaUtensils,
  FaBullseye,
  FaCalendarAlt,
  FaBolt,
} from 'react-icons/fa'

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 space-y-4 bg-white p-6">
        <h2 className="text-xl font-bold text-orange-500">
          Fitness <FaDumbbell className="inline text-xl" />
        </h2>
        <nav className="mt-8 space-y-4">
          <SidebarLink icon={<FaChartLine />} label="Overview" />
          <SidebarLink icon={<FaBolt />} label="Exercises" />
          <SidebarLink icon={<FaUtensils />} label="Diet Plan" />
          <SidebarLink icon={<FaBullseye />} label="Goals" />
          <SidebarLink icon={<FaCalendarAlt />} label="My Schedule" />
        </nav>
      </aside>
    </div>
  )
}

/* Sidebar Link Component */
function SidebarLink({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <div className="flex cursor-pointer items-center space-x-2 text-gray-600 hover:text-gray-900">
      <div className="text-lg">{icon}</div>
      <span>{label}</span>
    </div>
  )
}

export default Dashboard
