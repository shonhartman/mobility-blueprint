'use client';
import Image, { type ImageProps } from 'next/image'

import { Container } from '@/components/Container'
import { useState } from 'react';

type ExerciseType = {
  name: string;
  id: number,
  image: ImageProps['src'];
};

type ExercisesProps = {
  data: {
    title: string;
    description: string;
    exercises: ExerciseType[];
  }
};

function Exercise({
  exercise,
  children,
}: {
  exercise: { name: string; image: ImageProps['src'] }
  children: React.ReactNode
}) {
  return (
  <figure className="rounded-4xl shadow-md ring-1 ring-slate-900/5 flex flex-col">
    <div className="bg-slate-50 flex-grow rounded-4xl overflow-hidden">
      <Image
        className="h-full w-full object-cover"
        src={exercise.image}
        alt=""
        width={350}
        height={350}
      />
    </div>
    </figure>
  )
}

export function Exercises({ data }: ExercisesProps) {
  const [finishedExercises, setFinishedExercises] = useState<number[]>([])

  const handleExerciseClick = (exerciseId: number) => {
    let newfinishedExercises = [...finishedExercises];
    const currentDate = new Date();    

    if (!finishedExercises.includes(exerciseId)) {      
      newfinishedExercises.push(exerciseId);
      setFinishedExercises(newfinishedExercises);
      // Store in localStorage until db solution is viable
      localStorage.setItem('finishedExercises', JSON.stringify(newfinishedExercises.map(exerciseId => ({exerciseId, currentDate}))));
    }
  }
  
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="mb-8 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          {data.title}
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          {data.description}
        </p>
      </Container>
      <ul
        role="list"
        className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gridAutoRows: 'auto' }}
      >
        {data.exercises.flat().map((exercise) => (
          <li key={exercise.name} onClick={() => handleExerciseClick(exercise.id)}>
            <Exercise exercise={exercise}>
              {exercise.name}
            </Exercise>
          </li>
        ))}
      </ul>
    </section>
  );
}
