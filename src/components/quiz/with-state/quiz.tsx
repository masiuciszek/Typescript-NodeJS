import {elements, elevations} from "@/styles/styled-record"
import styled from "@emotion/styled"
import quizData from "../../../data/quiz-data.json"
import Button from "@/components/styled/button"
import {motion} from "framer-motion"
import {css} from "@emotion/react"

interface Props {
  currentQuestion: number
  isGameDone: boolean
  handleClick: ({isTrue, text, prefix}: {isTrue: boolean; text: string; prefix: string}) => void
}

const QuizWrapper = styled(motion.div)`
  display: flex;
  min-height: 14rem;
  padding: 1rem;
  width: 100%;
  border: 1px solid ${elements.paragraph};
  border-radius: 4px;
  box-shadow: ${elevations.shadowLg};
  background-color: ${elements.blueishShadow};
  color: ${elements.background};
  margin-bottom: 1rem;
  .question {
    display: flex;
    flex: 1 0 50%;
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
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    button {
      height: 3rem;
      min-width: 12rem;
    }
  }
`

const spanStyles = (isGameDone: boolean) => css`
  text-decoration: ${isGameDone ? "line-through" : null};
`

export const Quiz = ({currentQuestion, isGameDone, handleClick}: Props) => {
  return (
    <QuizWrapper
      initial={{opacity: 0, x: -1000}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: 1000}}
      transition={{delay: 0.2, damping: 10, stiffness: 50}}
    >
      <div className="question">
        {isGameDone ? <p>Game is done</p> : <p>{quizData[currentQuestion].question}</p>}
      </div>
      <AnswersList>
        {quizData[currentQuestion].answers.map(({prefix, text, isTrue}) => (
          <li key={prefix}>
            <Button disabled={isGameDone} onClick={() => handleClick({isTrue, text, prefix})}>
              <span
                css={css`
                  ${spanStyles(isGameDone)}
                `}
              >
                {text}
              </span>
            </Button>
          </li>
        ))}
      </AnswersList>
    </QuizWrapper>
  )
}
