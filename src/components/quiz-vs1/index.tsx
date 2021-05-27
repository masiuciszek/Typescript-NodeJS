import styled from "@emotion/styled"
import produce from "immer"
import { useState } from "react"
import { colors, elevations, resetBtnStyles } from "../../styles/common"

const questions = [
  {
    id: 1,
    question: "What was the name of Harry Potters Mom",
    answers: [
      { text: "Lilly", isCorrect: true },
      { text: "Tina", isCorrect: false },
      { text: "Linda", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "What is the capital of Thailand",
    answers: [
      { text: "Hua hin", isCorrect: false },
      { text: "Bangkok", isCorrect: true },
      { text: "Poznan", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "What year did Covid-19 break out?",
    answers: [
      { text: "2020", isCorrect: false },
      { text: "2018", isCorrect: false },
      { text: "2019", isCorrect: true },
    ],
  },
]
const QuizWrapper = styled.section`
  /* border: 1px solid #000; */
`

const QuizBox = styled.div`
  padding: 0.5em;
  max-width: 800px;
  margin: 0 auto 0.5em;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  min-height: 12rem;
  border-radius: 4px;
  box-shadow: ${elevations.shadowM};
`

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    border-bottom: 2px solid ${colors.accent};
  }
`

const QuizList = styled.ul`
  padding: 0;
  display: flex;
  flex-flow: column wrap;
  li {
    flex: 1;
    display: flex;
    height: 3rem;
    margin-bottom: 0.25em;
    button {
      ${resetBtnStyles};
      flex: 1 0 100%;
    }
  }
`

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [isEnd, setIsEnd] = useState(false)

  const handleClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(produce(prevScore => prevScore + 1))
    }
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(produce(() => nextQuestion))
    } else {
      setIsEnd(produce(() => true))
    }
  }

  return (
    <QuizWrapper>
      {isEnd && (
        <p>
          you scored {score} out of {questions.length}
        </p>
      )}
      <QuizBox>
        <QuestionWrapper>
          <p>{questions[currentQuestion].question}</p>
        </QuestionWrapper>
        <QuizList>
          {questions[currentQuestion].answers.map(({ text, isCorrect }) => (
            <li key={text}>
              <button type="button" onClick={() => handleClick(isCorrect)}>
                {text}
              </button>
            </li>
          ))}
        </QuizList>
      </QuizBox>
    </QuizWrapper>
  )
}
export default Quiz
