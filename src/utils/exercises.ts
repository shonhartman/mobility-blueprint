import EXERCISE_DATA from '@/data/EXERCISE_DATA.json'

type Exercise = {
  _id: string
  name: string
  category: string
  subCategory: string
  description: string
  _createdAt: string
  _updatedAt: string
}

export function getExercisesByType(category: string, subCategory: string) {
  return EXERCISE_DATA.filter(
    (exercise: Exercise) =>
      exercise.category.toLowerCase() === category.toLowerCase() &&
      exercise.subCategory.toLowerCase() === subCategory.toLowerCase()
  ).map((exercise: Exercise) => ({
    name: exercise.name,
    id: exercise._id,
    image: '', // We'll handle images separately
    description: exercise.description
  }))
}
