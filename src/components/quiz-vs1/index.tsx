import styled from "@emotion/styled"
import produce from "immer"
import { useState } from "react"
import { colors } from "../../styles/common"
import { motion } from "framer-motion"
import { GameMessage } from "./game-message"
import { Box } from "./box"

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
  position: relative;
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

  const newGame = (): void => {
    setCurrentQuestion(produce(() => 0))
    setScore(produce(() => 0))
    setIsEnd(produce(() => false))
  }

  return (
    <QuizWrapper>
      <GameMessage isOn={isEnd}>
        <p>
          you scored {score} / {questions.length} questions
        </p>
        <motion.button
          type="button"
          whileHover={{ backgroundColor: colors.text, color: colors.primary, scale: 1.03 }}
          onClick={newGame}
        >
          New game
        </motion.button>
      </GameMessage>

      <Box handleClick={handleClick} currentQuestion={currentQuestion} questions={questions} />
    </QuizWrapper>
  )
}
export default Quiz
