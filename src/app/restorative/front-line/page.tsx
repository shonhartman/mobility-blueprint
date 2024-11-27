import { Exercises } from '@/components/Exercises'
import { getExercisesByType } from '@/utils/exercises'

import frontLine1 from '@/images/front-line/front_line_1.jpg'
import frontLine2 from '@/images/front-line/front_line_2.jpg'
import frontLine3 from '@/images/front-line/front_line_3.jpg'
import frontLine4 from '@/images/front-line/front_line_4.jpg'
import frontLine5 from '@/images/front-line/front_line_5.jpg'
import frontLine6 from '@/images/front-line/front_line_6.jpg'
import frontLine7 from '@/images/front-line/front_line_7.jpg'
import frontLine8 from '@/images/front-line/front_line_8.jpg'

const images = [
  frontLine1, frontLine2, frontLine3, frontLine4,
  frontLine5, frontLine6, frontLine7, frontLine8,
]

const exercises = getExercisesByType('restorative', 'front-line').map((exercise, index) => ({
  ...exercise,
  image: images[index] || ''
}))

const exerciseData = {
  title: 'Front Line Conditioning',
  description:
    'By targeting the superficial front line fascia, these exercises promote flexibility, strength, and overall health.',
  exercises
}

export default function FrontLinePage() {
  return <Exercises data={exerciseData} />
}
