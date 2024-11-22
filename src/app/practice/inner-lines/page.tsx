import { Exercises } from '@/components/Exercises'

import innerLines1 from '@/images/inner-lines/inner_lines_1.jpg'
import innerLines2 from '@/images/inner-lines/inner_lines_2.jpg'
import innerLines3 from '@/images/inner-lines/inner_lines_3.jpg'
import innerLines4 from '@/images/inner-lines/inner_lines_4.jpg'
import innerLines5 from '@/images/inner-lines/inner_lines_5.jpg'
import innerLines6 from '@/images/inner-lines/inner_lines_6.jpg'
import innerLines7 from '@/images/inner-lines/inner_lines_7.jpg'
import innerLines8 from '@/images/inner-lines/inner_lines_8.jpg'
import innerLines9 from '@/images/inner-lines/inner_lines_9.jpg'
import innerLines10 from '@/images/inner-lines/inner_lines_10.jpg'

const exerciseData = {
  title: 'Inner Lines Conditioning',
  description:
    'By targeting the deep front line fascia, these exercises promote flexibility, strength, and overall health.',
  exercises: [
    {
      name: 'innerLines1',
      id: 0,
      image: innerLines1,
    },
    {
      name: 'innerLines2',
      id: 1,
      image: innerLines2,
    },
    {
      name: 'innerLines3',
      id: 2,
      image: innerLines3,
    },
    {
      name: 'innerLines4',
      id: 3,
      image: innerLines4,
    },
    {
      name: 'innerLines5',
      id: 4,
      image: innerLines5,
    },
    {
      name: 'innerLines6',
      id: 5,
      image: innerLines6,
    },
    {
      name: 'innerLines7',
      id: 6,
      image: innerLines7,
    },
    {
      name: 'innerLines8',
      id: 7,
      image: innerLines8,
    },
    {
      name: 'innerLines9',
      id: 8,
      image: innerLines9,
    },
    {
      name: 'innerLines10',
      id: 9,
      image: innerLines10,
    },
  ],
}

export default function InnerLinesPage() {
  return <Exercises data={exerciseData} />
}
