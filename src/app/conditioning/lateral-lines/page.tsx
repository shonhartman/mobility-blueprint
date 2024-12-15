import { Exercises } from '@/components/Exercises'

import lateralLines1 from '@/images/lateral-lines/lateral_lines_1.jpg'
import lateralLines2 from '@/images/lateral-lines/lateral_lines_2.jpg'
import lateralLines3 from '@/images/lateral-lines/lateral_lines_3.jpg'
import lateralLines4 from '@/images/lateral-lines/lateral_lines_4.jpg'
import lateralLines5 from '@/images/lateral-lines/lateral_lines_5.jpg'
import lateralLines6 from '@/images/lateral-lines/lateral_lines_6.jpg'
import lateralLines7 from '@/images/lateral-lines/lateral_lines_7.jpg'
import lateralLines8 from '@/images/lateral-lines/lateral_lines_8.jpg'

const exerciseData = {
  title: 'Lateral Lines Conditioning',
  description: 'By targeting the lateral line fascia, these exercises promote flexibility, strength, and overall health.',
  exercises: [
    {
      name: 'lateralLines1',
      id: '0',
      image: lateralLines1,
    },
    {
      name: 'lateralLines2',
      id: '1',
      image: lateralLines2,
    },
    {
      name: 'lateralLines3',
      id: '2',
      image: lateralLines3,
    },
    {
      name: 'lateralLines4',
      id: '3',
      image: lateralLines4,
    },
    {
      name: 'lateralLines5',
      id: '4',
      image: lateralLines5,
    },
    {
      name: 'lateralLines6',
      id: '5',
      image: lateralLines6,
    },
    {
      name: 'lateralLines7',
      id: '6',
      image: lateralLines7,
    },
    {
      name: 'lateralLines8',
      id: '7',
      image: lateralLines8,
    },
  ],
}

export default function LateralLinesPage() {
  return <Exercises data={exerciseData} />
}
