import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { FC } from "react"
import { Interpreter, StateValue } from "xstate"
import { colors } from "../../styles/common"
import { Button } from "./styled"
import { QuizData, QuizGameContext, QuizMachineEvent } from "./utils"

interface Props {
  quizData: Array<QuizData>
  send: Interpreter<QuizGameContext, any, QuizMachineEvent>["send"]
  currentQuestion: number
  currentState: StateValue
}

const Wrapper = styled.div`
  border: 2px solid ${colors.accent};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  p {
    margin-right: 0.5rem;
    border-bottom: 2px solid ${colors.accent};
  }
`

const List = styled.ul`
  display: flex;
  flex-flow: column wrap;
  padding: 1rem;
  width: 10rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  li {
    margin-bottom: 0.5rem;
    button {
      min-width: 6rem;
    }
  }
`

export const QuizBox: FC<Props> = ({ quizData, send, currentQuestion, currentState }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <Wrapper>
        <p>{quizData[currentQuestion].question}</p>
        <List>
          {quizData[currentQuestion].answers.map(({ answer, isTrue }) => (
            <li key={answer}>
              <Button
                type="button"
                disabled={currentState === "endOfQuiz"}
                whileHover={{
                  backgroundColor: colors.dangerShadow,
                  x: 1,
                  y: 1,
                }}
                onClick={() => {
                  const nextQuestion = currentQuestion + 1
                  send("NEXT", {
                    isTrue,
                    answer,
                    hasAnsweredLastQuestion: nextQuestion === quizData.length,
                    question: quizData[currentQuestion].question,
                  })
                }}
              >
                {answer}
              </Button>
            </li>
          ))}
        </List>
      </Wrapper>
    </motion.section>
  )
}
