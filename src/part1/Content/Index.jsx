import Part from "./Part"

const Content = ({ parts }) => {
  return (
    <>
      <Part part={parts.part1} />
      <Part part={parts.part2} />
      <Part part={parts.part3} />
    </>
  )
 }

 export default Content