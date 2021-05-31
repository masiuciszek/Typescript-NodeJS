import { FC } from "react"
import { questions } from "./data"
import { AnswerButton, Cell } from "./styles"
import { Action } from "./types"

interface Props {
  isModalOpen: boolean
  currentQuestion: number
  dispatch: React.Dispatch<Action>
}

export const QuestionItem: FC<Props> = ({ isModalOpen, currentQuestion, dispatch }) => (
  <>
    {questions.map(({ question, id, answers }) => (
      <li key={id}>
        <Cell>
          <p>{question}</p>
        </Cell>
        <Cell>
          {answers.map(({ text, prefix, isCorrect }) => (
            <AnswerButton
              disabled={isModalOpen || id !== currentQuestion}
              key={prefix}
              onClick={() => {
                if (isCorrect) {
                  dispatch({ type: "INCREMENT_SCORE" })
                }

                const nextQuestion = currentQuestion + 1
                dispatch({ type: "ADD_ANSWERED_DATA", payload: { id, prefix } })
                if (nextQuestion < questions.length) {
                  dispatch({ type: "SELECT_OPTION", payload: nextQuestion })
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
