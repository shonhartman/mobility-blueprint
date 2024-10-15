'use client';
import Image, { type ImageProps } from 'next/image'

import { Container } from '@/components/Container'
import { useState, useEffect } from 'react';
import HomeButton from './HomeButton';
import { useAuth } from './auth/AuthContext';
import { saveExerciseData, getExerciseData } from '../../services/database';
import { log } from 'console';

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
  const [finishedExercises, setFinishedExercises] = useState<{ exerciseId: number, date: string }[]>([]);
  const { user } = useAuth(); // Get the current user from AuthContext
  console.log(user);

  useEffect(() => {
    const fetchExercises = async () => {
      if (user) {
        try {
          const exercises = await getExerciseData();
          const oneMonthAgo = new Date();
          oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

          const validExercises = exercises.filter((exercise: { date: string }) => {
            const finishDate = new Date(exercise.date);
            return finishDate >= oneMonthAgo;
          });

          setFinishedExercises(validExercises);
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
        const updatedExercises = await getExerciseData();
        setFinishedExercises(updatedExercises);
      } catch (error) {
        console.error("Error saving exercise data:", error);
      }
    } else {
      console.log("User not signed in");
      // You might want to redirect to sign-in page or show a message
    }
  };

  const isExerciseFinished = (exerciseId: number) => {
    const exercise = finishedExercises.find(ex => ex.exerciseId === exerciseId);
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
        {data.exercises.flat().map((exercise) => (
          <li
            key={exercise.name}
            onClick={() => handleExerciseClick(exercise.id)}
            className={isExerciseFinished(exercise.id) ? 'opacity-50' : ''}
          >
            <Exercise exercise={exercise}>
              {exercise.name}
            </Exercise>
          </li>
        ))}
      </ul>
    </section>
  );
}
