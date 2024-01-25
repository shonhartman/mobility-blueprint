import Image, { type ImageProps } from 'next/image'

import { Container } from '@/components/Container'

type ExerciseType = {
  content: string;
  exercise: {
    name: string;
    role: string;
    image: ImageProps['src'];
  };
};

type ExercisesProps = {
  exercises: ExerciseType[][];
};

function Exercise({
  exercise,
  children,
}: {
  exercise: { name: string; role: string; image: ImageProps['src'] }
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

export function Exercises({ exercises }: ExercisesProps) {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="mb-8 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Lateral Line Conditioning
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          By targeting the lateral line fascia, 
          these exercises promote flexibility, strength, and overall health. 
        </p>
      </Container>
      <ul
        role="list"
        className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gridAutoRows: 'auto' }}
      >
        {exercises.flat().map((exercise, exerciseIndex) => (
          <li key={exerciseIndex}>
            <Exercise exercise={exercise.exercise}>
              {exercise.content}
            </Exercise>
          </li>
        ))}
      </ul>
    </section>
  );
}
