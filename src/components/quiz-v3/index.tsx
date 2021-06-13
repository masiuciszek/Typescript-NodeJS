import styled from "@emotion/styled"
import { useMachine } from "@xstate/react"
import { Fade } from "../common/fade"
import Layout from "../layout"
import { quizMachine } from "./machine"
import { QuizBox } from "./quiz-box"
import QuizDialog from "./quiz-dialog"

const Wrapper = styled.section`
  border: 1px solid red;
  min-height: 65vh;
`

const BtnWrapper = styled.div`
  display: flex;
`

const QuizGame = () => {
  const [state, send] = useMachine(quizMachine)
  const showQuestions = state.value === "active" || state.value === "finalQuestion"
  const isQuizDone = state.value === "endOfQuiz"

  return (
    <Layout>
      <QuizDialog
        isQuizDone={isQuizDone}
        dialogType={"END_GAME_MESSAGE"}
        meta={state.meta}
        currentState={state.value}
        send={send}
        resultData={{
          score: state.context.score,
          ofPossibleQuestions: state.context.quizData.length,
        }}
      />

      <Wrapper>
        <h1>Quiz Game 3</h1>
        <p>
          {" "}
          currentState: {state.value} score: {state.context.score}{" "}
        </p>
        <BtnWrapper>
          {state.matches("idle") && (
            <button type="button" onClick={() => send("TOGGLE")}>
              {" "}
              Start
            </button>
          )}
        </BtnWrapper>

        <Fade isAnimated={showQuestions}>
          <QuizBox
            quizData={state.context.quizData}
            send={send}
            currentQuestion={state.context.currentQuestion}
            currentState={state.value}
          />
        </Fade>
      </Wrapper>
    </Layout>
  )
}

export default QuizGame
