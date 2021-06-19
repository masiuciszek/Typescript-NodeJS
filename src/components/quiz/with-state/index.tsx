import styled from "@emotion/styled"
import {useEffect, useState} from "react"
import quizData from "../../../data/quiz-data.json"
import Button from "@/components/styled/button"
import produce from "immer"
import AnimateWrapper from "@/components/common/animate-wrapper"
import GameDialog from "@/components/common/game-dialog"
import Title from "@/components/common/title"
import {css} from "@emotion/react"
import {elements} from "@/styles/styled-record"
import {Quiz} from "./quiz"

const titleStyles = css`
  justify-content: center;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
`

const GameWrapper = styled.div`
  position: relative;
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const BtnWrapper = styled.div`
  display: flex;
  width: 100%;

  button {
    margin-left: 1rem;
  }
`

const showResultCss = css`
  height: 3rem;
  width: 8rem;
`

interface AnswerData {
  prefix: string
  isTrue: boolean
  text: string
}

const QuizWithState = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [data, setData] = useState<AnswerData[]>([])
  const [isGameDone, setIsGameDone] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = ({isTrue, text, prefix}: AnswerData): void => {
    if (isTrue) {
      setScore(produce((prevScore) => prevScore + 1))
    }

    setData((prev) => {
      const xs = [...prev, {text, isTrue, prefix}]
      return xs
    })
    const nextQuestion = currentQuestion + 1

    if (nextQuestion < quizData.length) {
      setCurrentQuestion(produce(() => nextQuestion))
    } else {
      setIsGameDone(produce(() => true))
    }
  }

  useEffect(() => {
    if (isGameDone) {
      setIsModalOpen(true)
    }
  }, [isGameDone])

  const newGame = (): void => {
    setData([])
    setScore(0)
    setCurrentQuestion(0)
    setIsGameDone(false)
    setIsModalOpen(false)
  }

  return (
    <GameWrapper>
      <AnimateWrapper isOn={isModalOpen}>
        <GameDialog
          newGame={newGame}
          score={score}
          possibleScore={quizData.length}
          close={() => setIsModalOpen(false)}
        />
      </AnimateWrapper>
      <Title incomingStyles={titleStyles}>
        <h1>QuizWithState</h1>
      </Title>
      <Quiz currentQuestion={currentQuestion} isGameDone={isGameDone} handleClick={handleClick} />
      {isGameDone && (
        <BtnWrapper>
          <Button
            config={{
              whileHover: {
                width: "8.1rem",
                backgroundColor: elements.background,
                color: elements.paragraph,
              },
            }}
            incomingStyles={showResultCss}
            onClick={() => setIsModalOpen(true)}
          >
            {" "}
            show result{" "}
          </Button>
          <Button
            config={{
              whileHover: {
                width: "8.1rem",
                backgroundColor: elements.background,
                color: elements.paragraph,
              },
            }}
            incomingStyles={showResultCss}
            onClick={newGame}
          >
            {" "}
            new game
          </Button>
        </BtnWrapper>
      )}
    </GameWrapper>
  )
}
export default QuizWithState
