/* This example requires Tailwind CSS v2.0+ */
import { DotsVerticalIcon } from '@heroicons/react/solid'

const projects = [
  { name: 'Lateral Lines', initials: 'LL', href: '#', exercises: 8, bgColor: 'bg-red-600' },
  { name: 'Inner Lines', initials: 'IL', href: '#', exercises: 10, bgColor: 'bg-orange-500' },
  { name: 'Front Line', initials: 'SFL', href: '#', exercises: 8, bgColor: 'bg-yellow-400' },
  { name: 'Back Line', initials: 'BL', href: '#', exercises: 8, bgColor: 'bg-green-500' },
  { name: 'Spiral Lines', initials: 'SPL', href: '#', exercises: 9, bgColor: 'bg-blue-400' }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Conditioning() {
  return (
    <div className='container mx-auto mt-8'>
      <h2 className="text-gray-600 text-xs font-medium uppercase tracking-wide">Meridians</h2>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {projects.map((project) => (
          <li key={project.name} className="col-span-1 flex shadow-sm rounded-md">
            <div
              className={classNames(
                project.bgColor,
                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
              )}
            >
              {project.initials}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a href={project.href} className="text-gray-900 font-medium hover:text-gray-600">
                  {project.name}
                </a>
                <p className="text-gray-500">{project.exercises} Exercises</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Open options</span>
                  <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
