import { Exercises } from "@/components/Exercises";

import lateralLines1 from '@/images/lateral-lines/lateral_lines_1.jpg'
import lateralLines2 from '@/images/lateral-lines/lateral_lines_2.jpg'
import lateralLines3 from '@/images/lateral-lines/lateral_lines_3.jpg'
import lateralLines4 from '@/images/lateral-lines/lateral_lines_4.jpg'
import lateralLines5 from '@/images/lateral-lines/lateral_lines_5.jpg'
import lateralLines6 from '@/images/lateral-lines/lateral_lines_6.jpg'
import lateralLines7 from '@/images/lateral-lines/lateral_lines_7.jpg'
import lateralLines8 from '@/images/lateral-lines/lateral_lines_8.jpg'

const exercises = [
  [
    {
      content:
        'Mira’s teaching style is second to none. Everything was easy to follow every step of the way.',
      exercise: {
        name: 'Antonio Littel',
        role: 'Frontend Developer',
        image: lateralLines1,
      },
    },
    {
      content:
        'Even though I was excited to learn, I was pessimistic that I wouldn’t actually ever get good enough to design my own icons. I was wrong — this book is all I needed.',
      exercise: {
        name: 'Lynn Nolan',
        role: 'Growth Marketer',
        image: lateralLines2,
      },
    },
    {
      content:
        'I’ve been employed as a professional icon designer for years and still learned tons of new tricks that have made my work even better',
      exercise: {
        name: 'Krista Prosacco',
        role: 'Professional Designer',
        image: lateralLines3,
      },
    },
  ],
  [
    {
      content:
        'I run an ecommerce store selling rare vintage gummy bears and could never find a good gummy bear icon. Now I can design my own in minutes.',
      exercise: {
        name: 'Cameron Considine',
        role: 'Entrepreneur',
        image: lateralLines4,
      },
    },
    {
      content:
        'The complete package is worth it for the weekly teardown videos alone. I’ve learned so much watching Mira take apart other icons and recreate them from scratch.',
      exercise: {
        name: 'Regina Wisoky',
        role: 'Design Student',
        image: lateralLines5,
      },
    },
    {
      content:
        'I didn’t expect to find a lot of value in the community but now I’m in there for at least an hour every day picking up tips from other designers.',
      exercise: {
        name: 'Vernon Cummerata',
        role: 'UI Engineer',
        image: lateralLines6,
      },
    },
  ],
  [
    {
      content:
        'I couldn’t believe how fast Mira moved in Figma compared to my own workflow. I’m designing icons more accurately in half the time with the shortcuts I learned from her videos.',
      exercise: {
        name: 'Steven Hackett',
        role: 'Bootcamp Instructor',
        image: lateralLines7,
      },
    },
    {
      content:
        'I never thought I would enjoy designing icons but using the ideas in this book, it’s become a great way for me to relax while still being creative.',
      exercise: {
        name: 'Carla Schoen',
        role: 'Startup Founder',
        image: lateralLines8,
      },
    },
  ],
]

export default function LateralLinesPage() {
  return (
    <Exercises exercises={exercises} />
  )
}