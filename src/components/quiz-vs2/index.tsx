import { useReducer } from "react"
import { FinalMessage } from "./final-message"
import {
  BtnPrimary,
  Button,
  ButtonWrapper,
  Col,
  GameBody,
  GameWrapper,
  Header,
  List,
} from "./styles"
import { QuestionItem } from "./question-item"
import MyStatsDialog from "./my-stats-dialog"
import { questions } from "./data"
import { reducer } from "./reducer"

const QuizV2 = () => {
  const [
    { currentQuestion, score, isGameDone, isModalOpen, answeredQuestions, isMyStatsModalOpen },
    dispatch,
  ] = useReducer(reducer, {
    currentQuestion: 0,
    score: 0,
    isGameDone: false,
    isModalOpen: false,
    answeredQuestions: [],
    isMyStatsModalOpen: false,
  })

  return (
    <GameWrapper>
      <MyStatsDialog
        answeredQuestions={answeredQuestions}
        isMyStatsModalOpen={isMyStatsModalOpen}
        closeMyStatsModal={() => dispatch({ type: "CLOSE_MY_STATS_MODAL" })}
      />
      <FinalMessage
        isModalOpen={isModalOpen}
        questionsLength={questions.length}
        newGame={() => dispatch({ type: "NEW_GAME" })}
        closeModal={() => dispatch({ type: "CLOSE_MODAL" })}
        score={score}
      />

      <GameBody>
        <Header>
          <Col>Questions</Col>
          <Col>1</Col>
          <Col>X</Col>
          <Col>2</Col>
        </Header>
        <List>
          <QuestionItem
            isModalOpen={isModalOpen}
            currentQuestion={currentQuestion}
            dispatch={dispatch}
          />
        </List>
      </GameBody>
      {/* when game is over */}
      {isGameDone && (
        <ButtonWrapper
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -1000 }}
        >
          <Button onClick={() => dispatch({ type: "SHOW_MY_STATS" })}>view your answers</Button>
          <Button onClick={() => dispatch({ type: "OPEN_MODAL" })}>view result</Button>
          <BtnPrimary onClick={() => dispatch({ type: "NEW_GAME" })}>new game</BtnPrimary>
        </ButtonWrapper>
      )}
    </GameWrapper>
  )
}

export default QuizV2
