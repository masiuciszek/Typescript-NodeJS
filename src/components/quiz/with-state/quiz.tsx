import {elements, elevations} from "@/styles/styled-record"
import styled from "@emotion/styled"
import quizData from "../../../data/quiz-data.json"
import Button from "@/components/styled/button"

interface Props {
  currentQuestion: number
  isGameDone: boolean
  handleClick: ({isTrue, text, prefix}: {isTrue: boolean; text: string; prefix: string}) => void
}

const QuizWrapper = styled.div`
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

export const Quiz = ({currentQuestion, isGameDone, handleClick}: Props) => {
  return (
    <QuizWrapper>
      <div className="question">
        <p>{quizData[currentQuestion].question}</p>
      </div>
      <AnswersList>
        {quizData[currentQuestion].answers.map(({prefix, text, isTrue}) => (
          <li key={prefix}>
            <Button disabled={isGameDone} onClick={() => handleClick({isTrue, text, prefix})}>
              {text}
            </Button>
          </li>
        ))}
      </AnswersList>
    </QuizWrapper>
  )
}
