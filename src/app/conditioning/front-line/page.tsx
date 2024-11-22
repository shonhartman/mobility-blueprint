import { Exercises } from '@/components/Exercises'

import frontLine1 from '@/images/front-line/front_line_1.jpg'
import frontLine2 from '@/images/front-line/front_line_2.jpg'
import frontLine3 from '@/images/front-line/front_line_3.jpg'
import frontLine4 from '@/images/front-line/front_line_4.jpg'
import frontLine5 from '@/images/front-line/front_line_5.jpg'
import frontLine6 from '@/images/front-line/front_line_6.jpg'
import frontLine7 from '@/images/front-line/front_line_7.jpg'
import frontLine8 from '@/images/front-line/front_line_8.jpg'

const exerciseData = {
  title: 'Front Line Conditioning',
  description: 'By targeting the superficial front line fascia, these exercises promote flexibility, strength, and overall health.',
  exercises: [
    {
      name: 'frontLine1',
      id: 0,
      image: frontLine1,
    },
    {
      name: 'frontLine2',
      id: 1,
      image: frontLine2,
    },
    {
      name: 'frontLine3',
      id: 2,
      image: frontLine3,
    },
    {
      name: 'frontLine4',
      id: 3,
      image: frontLine4,
    },
    {
      name: 'frontLine5',
      id: 4,
      image: frontLine5,
    },
    {
      name: 'frontLine6',
      id: 5,
      image: frontLine6,
    },
    {
      name: 'frontLine7',
      id: 6,
      image: frontLine7,
    },
    {
      name: 'frontLine8',
      id: 7,
      image: frontLine8,
    },
  ],
}

export default function frontLinePage() {
  return <Exercises data={exerciseData} />
}
