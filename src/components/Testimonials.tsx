import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'

type TestimonialType = {
  content: string;
  exercise: {
    name: string;
    role: string;
    image: ImageProps['src'];
  };
};

type TestimonialsProps = {
  exercises: TestimonialType[][];
};

function Testimonial({
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


export function Testimonials({ exercises }: TestimonialsProps) {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          The Practice
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          This is the list of exercises to do for 1 minute once per month
        </p>
      </Container>
      <Expandable className="group mt-16">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        >
          {exercises
            .map((column) => column[0])
            .map((exercise, exerciseIndex: number) => (
              <li key={exerciseIndex} className="lg:hidden">
                <Testimonial exercise={exercise.exercise}>
                  {exercise.content}
                </Testimonial>
              </li>
            ))}
          {exercises.map((column, columnIndex) => (
            <li
              key={columnIndex}
              className="hidden group-data-[expanded]:list-item lg:list-item"
            >
              <ul role="list">
                <ExpandableItems>
                  {column.map((exercise, exerciseIndex) => (
                    <li
                      key={exerciseIndex}
                      className={clsx(
                        exerciseIndex === 0 && 'hidden lg:list-item',
                        exerciseIndex === 1 && 'lg:mt-8',
                        exerciseIndex > 1 && 'mt-8',
                      )}
                    >
                      <Testimonial exercise={exercise.exercise}>
                        {exercise.content}
                      </Testimonial>
                    </li>
                  ))}
                </ExpandableItems>
              </ul>
            </li>
          ))}
        </ul>
        <ExpandableButton>Read more testimonials</ExpandableButton>
      </Expandable>
    </section>
  )
}
