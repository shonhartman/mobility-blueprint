'use client';
import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
// import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { BackLine } from '@/components/BackLine'
import { FrontLine } from '@/components/FrontLine'
import { InnerLines } from '@/components/InnerLines'
import { LateralLines } from '@/components/LateralLines'
// import { Exercises } from '@/components/Exercises'
import { SpiralLine } from '@/components/SpiralLine'

export default function Home() {

  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <LateralLines />
      {/* <Exercise
        id="Exercise-from-tommy-stroman"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          “I didn’t know a thing about icon design until I read this book. Now I
          can create any icon I need in no time. Great resource!”
        </p>
      </Exercise> */}
      <InnerLines />
      <FrontLine />
      {/* <FreeChapters /> */}
      <BackLine />
      <SpiralLine/>
      <Author />
      <Footer />
    </>
  )
}
