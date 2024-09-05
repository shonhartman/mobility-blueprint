import { Exercises } from "@/components/Exercises";

// import backLines1 from '@/images/back-lines/back_lines_1.jpg'
// import backLines2 from '@/images/back-lines/back_lines_2.jpg'
// import backLines3 from '@/images/back-lines/back_lines_3.jpg'
// import backLines4 from '@/images/back-lines/back_lines_4.jpg'
// import backLines5 from '@/images/back-lines/back_lines_5.jpg'
// import backLines6 from '@/images/back-lines/back_lines_6.jpg'
// import backLines7 from '@/images/back-lines/back_lines_7.jpg'
// import backLines8 from '@/images/back-lines/back_lines_8.jpg'


const exerciseData = {
  title: 'Back Line Conditioning',
  description: 'By targeting the back line fascia, these exercises promote flexibility, strength, and overall health.',
  exercises: [
    {
      name: 'backLines1',
      id: 0,
      // image: backLines1,
    },
    {
      name: 'backLines2',
      id: 1,
      // image: backLines2,
    },
    {
      name: 'backLines3',
      id: 2,
      // image: backLines3,
    },
    {
      name: 'backLines4',
      id: 3,
      // image: backLines4,
    },
    {
       name: 'backLines5',
       id: 4,
       // image: backLines5,
     },
     {
       name: 'backLines6',
       id: 5,
       // image: backLines6,
     },
     {
       name: 'backLines7',
       id: 6,
       // image: backLines7,
     },
     {
       name: 'backLines8',
       id: 7,
       // image: backLines8,
     },
  ]
} 

export default function backLinesPage() {
  return (
    <Exercises data={exerciseData} />
  )
}