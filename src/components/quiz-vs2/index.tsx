import styled from "@emotion/styled"

const questions = [
  {
    id: 0,
    question: "Capital of Mynmar?",
    answers: [
      { text: "Paris", prefix: "1", isCorrect: false },
      { text: "London", prefix: "x", isCorrect: true },
      { text: "Naypyitaw", prefix: "2", isCorrect: true },
    ],
  },
]

const GameWrapper = styled.section`
  /*  */
`

const QuizV2 = () => {
  return (
    <GameWrapper>
      <h1>Q</h1>
    </GameWrapper>
  )
}

export default QuizV2
