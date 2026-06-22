import Content from "./part1/Content/Index"
import Header from "./part1/Header"
import Total from "./part1/Total"

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const exercisesAndParts = {
    part1: {
      name: 'Fundamentos da biblioteca React',
      exercises: 10
    },
    part2: {
      name: 'Usando props para passar dados',
      exercises: 7
    },
    part3: {
      name: 'Estado de um componente',
      exercises: 14
    }
  }
  const exercises1 = exercisesAndParts.part1.exercises
  const exercises2 = exercisesAndParts.part2.exercises
  const exercises3 = exercisesAndParts.part3.exercises
  const totalExercises = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Content parts={exercisesAndParts} />
      <Total totalExercises={totalExercises} />
    </div>
  )
}

export default App