import { FC } from "react"
import { AnswerButton, Cell } from "./styles"
import { Action } from "./types"

interface Answer {
  text: string
  prefix: string
  isCorrect: boolean
}
interface Question {
  id: number
  question: string
  answers: Answer[]
}
interface Props {
  questions: Question[]
  hasClosedModal: boolean
  currentQuestion: number
  dispatch: React.Dispatch<Action>
}

export const QuestionItem: FC<Props> = ({
  questions,
  hasClosedModal,
  currentQuestion,
  dispatch,
}) => (
  <>
    {questions.map(({ question, id, answers }) => (
      <li key={id}>
        <Cell>
          <p>{question}</p>
        </Cell>
        <Cell>
          {answers.map(({ text, prefix, isCorrect }) => (
            <AnswerButton
              disabled={hasClosedModal || id !== currentQuestion}
              key={prefix}
              onClick={() => {
                if (isCorrect) {
                  dispatch({ type: "INCREMENT_SCORE" })
                }
                const nextQuestion = currentQuestion + 1
                if (nextQuestion < questions.length) {
                  // TODO: make a new dispatch above with only  {prefix, id}
                  dispatch({ type: "SELECT_OPTION", payload: { nextQuestion, prefix, id } })
                } else {
                  dispatch({ type: "END_GAME" })
                }
              }}
            >
              <span>{prefix}</span> {text}
            </AnswerButton>
          ))}
        </Cell>
      </li>
    ))}
  </>
)
