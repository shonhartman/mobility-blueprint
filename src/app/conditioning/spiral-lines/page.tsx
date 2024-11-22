import { Exercises } from '@/components/Exercises'

const exerciseData = {
  title: 'Spiral Line Conditioning',
  description: 'By targeting the spiral line fascia, these exercises promote flexibility, strength, and overall health.',
  exercises: [
    {
      name: 'spiralLines1',
      id: 0,
      image: '',
    },
    {
      name: 'spiralLines2',
      id: 1,
      image: '',
    },
    {
      name: 'spiralLines3',
      id: 2,
      image: '',
    },
    {
      name: 'spiralLines4',
      id: 3,
      image: '',
    },
    {
      name: 'spiralLines5',
      id: 4,
      image: '',
    },
    {
      name: 'spiralLines6',
      id: 5,
      image: '',
    },
    {
      name: 'spiralLines7',
      id: 6,
      image: '',
    },
    {
      name: 'spiralLines8',
      id: 7,
      image: '',
    },
  ],
}

export default function spiralLinesPage() {
  return <Exercises data={exerciseData} />
}
