import styled from "@emotion/styled"
import {useEffect, useState} from "react"
import quizData from "../../../data/quiz-data.json"
import Button from "@/components/styled/button"
import produce from "immer"
import {AnimatePresence, motion} from "framer-motion"
import {elements} from "@/styles/styled-record"
import {css} from "@emotion/react"

const GameWrapper = styled.div`
  position: relative;
`

const QuizWrapper = styled.div`
  border: 1px solid #000;
  display: flex;
  .question {
    display: flex;
    flex: 1 0 50%;
    border: 1px solid #000;
    align-items: center;
    justify-content: center;
  }
`

const AnswersList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 50%;
  padding: 0;
  margin: 0;
  li {
    border: 1px solid #000;
    width: 100%;
    display: flex;
    justify-content: center;
  }
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
    const xs = [...data]
    xs.push({text, isTrue, prefix})
    setData(xs)
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

  return (
    <GameWrapper>
      <AnimatePresence>
        {isModalOpen && (
          <WinningMessage
            score={score}
            possibleScore={quizData.length}
            close={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
      <h1>QuizWithState</h1>
      <QuizWrapper>
        <div className="question">
          <p>{quizData[currentQuestion].question}</p>
        </div>
        <AnswersList>
          {quizData[currentQuestion].answers.map(({prefix, text, isTrue}) => (
            <li key={prefix}>
              <Button
                disabled={isGameDone}
                onClick={() => handleClick({isTrue, text, prefix})}
              >
                {text}
              </Button>
            </li>
          ))}
        </AnswersList>
        {isGameDone && (
          <Button onClick={() => setIsModalOpen(true)}>
            {" "}
            show game result{" "}
          </Button>
        )}
      </QuizWrapper>
    </GameWrapper>
  )
}
export default QuizWithState

interface WinningMessageProps {
  score: number
  possibleScore: number
  close: () => void
}

const MessageWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 5;
  background-color: ${elements.blueishShadow};
  display: flex;
  justify-content: center;
  align-items: center;

  .body {
    background-color: ${elements.background};
    border-radius: 4px;
    padding: 0.5rem;
    position: relative;

    button {
    }
  }
`

const buttonStyles = css`
  position: absolute;
  top: -1rem;
  right: -1rem;
  border-radius: 50%;
  min-width: 0;
  height: 3rem;
  width: 3rem;
  padding: 0;
  background-color: ${elements.danger};
`

function WinningMessage({score, possibleScore, close}: WinningMessageProps) {
  return (
    <MessageWrapper
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="body">
        <p>
          you scored {score}/{possibleScore} questions{" "}
        </p>
        <p>Great job</p>
        <Button
          incomingStyles={buttonStyles}
          onClick={close}
          config={{whileHover: {width: "2.9rem", height: "2.9rem"}}}
        >
          ╳
        </Button>
      </div>
    </MessageWrapper>
  )
}
