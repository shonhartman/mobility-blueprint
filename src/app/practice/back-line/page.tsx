import { Exercises } from "@/components/Exercises";

const exerciseData = {
  title: 'Back Line Conditioning',
  description: 'By targeting the back line fascia, these exercises promote flexibility, strength, and overall health.',
  exercises: [
    {
      name: 'backLines1',
      id: 0,
      image: '',
    },
    {
      name: 'backLines2',
      id: 1,
      image: '',
    },
    {
      name: 'backLines3',
      id: 2,
      image: '',
    },
    {
      name: 'backLines4',
      id: 3,
      image: '',
    },
    {
      name: 'backLines5',
      id: 4,
      image: '',
    },
    {
      name: 'backLines6',
      id: 5,
      image: '',
    },
    {
      name: 'backLines7',
      id: 6,
      image: '',
    },
    {
      name: 'backLines8',
      id: 7,
      image: '',
    },
  ]
}

export default function backLinesPage() {
  return (
    <Exercises data={exerciseData} />
  )
}