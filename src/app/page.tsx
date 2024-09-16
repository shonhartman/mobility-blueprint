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
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase';

interface TestUser {
  id: string;
  [key: string]: any;
}

export default function Home() {
  const [testData, setTestData] = useState<TestUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const testCollectionRef = collection(db, "test-users");
      const querySnapshot = await getDocs(testCollectionRef);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log({data});
      setTestData(data);
    };
    fetchData();
  }, []);

  console.log({testData});
  
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
