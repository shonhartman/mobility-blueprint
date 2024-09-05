import { Exercises } from "@/components/Exercises";


const exerciseData = {
  title: 'Spiral Line Conditioning',
  description: 'By targeting the spiral line fascia, these exercises promote flexibility, strength, and overall health.',
  exercises: [
    {
      name: 'spiralLines1',
      id: 0,
      // image: spiralLines1,
    },
    {
      name: 'spiralLines2',
      id: 1,
      // image: spiralLines2,
    },
    {
      name: 'spiralLines3',
      id: 2,
      // image: spiralLines3,
    },
    {
      name: 'spiralLines4',
      id: 3,
      // image: spiralLines4,
    },
    {
       name: 'spiralLines5',
       id: 4,
       // image: spiralLines5,
     },
     {
       name: 'spiralLines6',
       id: 5,
       // image: spiralLines6,
     },
     {
       name: 'spiralLines7',
       id: 6,
       // image: spiralLines7,
     },
     {
       name: 'spiralLines8',
       id: 7,
       // image: spiralLines8,
     },
  ]
} 

export default function spiralLinesPage() {
  return (
    <Exercises data={exerciseData}/>
  )
}