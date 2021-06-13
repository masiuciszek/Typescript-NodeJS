import styled from "@emotion/styled"
import { useMachine } from "@xstate/react"
import { colors } from "../../styles/common"
import { Fade } from "../common/fade"
import Layout from "../layout"
import { quizMachine } from "./machine"
import { QuizBox } from "./quiz-box"
import QuizDialog from "./quiz-dialog"
import { Button } from "./styled"
import { BUTTON_WIDTH, DIALOG_TYPES } from "./utils"

const Wrapper = styled.section`
  min-height: 65vh;
`

const BtnWrapper = styled.div`
  display: flex;
`

const Options = styled.div`
  display: flex;
`

const QuizGame = () => {
  const [state, send] = useMachine(quizMachine)
  const showQuestions = state.value === "active" || state.value === "finalQuestion"
  const isQuizDone = state.value === "endOfQuiz"
  const isChecking = state.value === "checking"
  const isInViewStats = state.value === "viewStats"

  return (
    <Layout>
      <QuizDialog
        isQuizDone={isQuizDone || isInViewStats}
        dialogType={isQuizDone ? DIALOG_TYPES.END_GAME_MESSAGE : DIALOG_TYPES.SHOW_STATS}
        answeredData={state.context.answeredData}
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
            <Button
              type="button"
              onClick={() => send("TOGGLE")}
              whileHover={{
                backgroundColor: colors.darkestShadow,
                width: BUTTON_WIDTH + 100,
              }}
            >
              Start
            </Button>
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

        <Fade isAnimated={isChecking}>
          <Options>
            <button type="button" onClick={() => send("TOGGLE")}>
              new game
            </button>
            <button
              type="button"
              onClick={() => {
                send("CLICK")
              }}
            >
              show stats
            </button>
          </Options>
        </Fade>
      </Wrapper>
    </Layout>
  )
}

export default QuizGame
