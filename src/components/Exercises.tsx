'use client';
import Image, { type ImageProps } from 'next/image'

import { Container } from '@/components/Container'
import { useState, useEffect } from 'react';
import HomeButton from './HomeButton';
import { useAuth } from './auth/AuthContext';
import { saveExerciseData, getExerciseData } from '../../services/database';
import { log } from 'console';

type ExerciseItem = {
  name: string;
  id: number,
  image: ImageProps['src'];
};

type ExercisesProps = {
  data: {
    title: string;
    description: string;
    exercises: ExerciseItem[];
  }
};

interface CompletedExercise {
  exerciseId: number;
  date: string;
}

function ExerciseCard({
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
  const [completedExercises, setCompletedExercises] = useState<CompletedExercise[]>([]);
  const { user } = useAuth(); // Get the current user from AuthContext

  useEffect(() => {
    const fetchExercises = async () => {
      if (user) {
        try {
          const fetchedExercises = await getExerciseData() as CompletedExercise[];
          const oneMonthAgo = new Date();
          oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

          const validExercises = fetchedExercises.filter((exercise) => {
            const finishDate = new Date(exercise.date);
            return finishDate >= oneMonthAgo;
          });

          setCompletedExercises(validExercises);
        } catch (error) {
          console.error("Error fetching exercise data:", error);
        }
      }
    };

    fetchExercises();
  }, [user]);

  const handleExerciseClick = async (exerciseId: number) => {
    if (user) {
      try {
        await saveExerciseData(exerciseId);
        const updatedExercises = await getExerciseData() as CompletedExercise[];
        setCompletedExercises(updatedExercises);
      } catch (error) {
        console.error("Error saving exercise data:", error);
      }
    } else {
      console.log("User not signed in");
    }
  };

  const isExerciseCompleted = (exerciseId: number) => {
    const exercise = completedExercises.find(ex => ex.exerciseId === exerciseId);
    if (!exercise) return false;

    const finishDate = new Date(exercise.date);
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    return finishDate >= oneMonthAgo;
  };

  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="mb-8 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          {data.title}
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          {data.description}
        </p>
        <HomeButton />
      </Container>
      <ul
        role="list"
        className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gridAutoRows: 'auto' }}
      >
        {data.exercises.flat().map((exerciseItem) => (
          <li
            key={exerciseItem.name}
            onClick={() => handleExerciseClick(exerciseItem.id)}
            className={isExerciseCompleted(exerciseItem.id) ? 'opacity-50' : ''}
          >
            <ExerciseCard exercise={exerciseItem}>
              {exerciseItem.name}
            </ExerciseCard>
          </li>
        ))}
      </ul>
    </section>
  );
}
