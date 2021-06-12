import styled from "@emotion/styled"
import { useMachine } from "@xstate/react"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { createMachine } from "xstate"
import Layout from "../layout"

interface Answer {
  answer: string
  isTrue: boolean
}
interface QuizData {
  id: number
  question: string
  answers: Array<Answer>
}

const quizData = [
  {
    id: 0,
    question: "Who won world cup in football 2018?",
    answers: [
      { answer: "Brail", isTrue: false },
      { answer: "Germany", isTrue: false },
      { answer: "France", isTrue: true },
    ],
  },
]

interface QuizGameContext {
  score: number
  currentQuestion: number
  quizData: Array<QuizData>
}
type QuizMachineEvent = { type: "TOGGLE" }

const quizMachine = createMachine<QuizGameContext, QuizMachineEvent>({
  id: "quiz",
  initial: "inactive",
  context: {
    score: 0,
    currentQuestion: 0,
    quizData,
  },
  states: {
    inactive: {
      on: {
        TOGGLE: {
          target: "active",
        },
      },
    },
    active: {
      on: {
        TOGGLE: {
          target: "inactive",
        },
      },
    },
  },
})

const Wrapper = styled.section``

const BtnWrapper = styled.div`
  display: flex;
`

const QuizGame = () => {
  const [state, send] = useMachine(quizMachine)

  console.log(state.context)
  console.log(state.value)
  return (
    <Layout>
      <Wrapper>
        <h1>QuizGFame 3</h1>
        <p>{state.value}</p>
        <BtnWrapper>
          {state.matches("inactive") && (
            <button type="button" onClick={() => send("TOGGLE")}>
              {" "}
              Start
            </button>
          )}
          {state.matches("active") && (
            <button type="button" onClick={() => send("TOGGLE")}>
              {" "}
              Close game
            </button>
          )}
        </BtnWrapper>

        <AnimatePresence>
          {state.matches("active") && <QuizBox quizData={state.context.quizData} />}
        </AnimatePresence>
      </Wrapper>
    </Layout>
  )
}

interface QuizBoxProps {
  quizData: Array<QuizData>
}

function QuizBox({ quizData }: QuizBoxProps) {
  return (
    <motion.section>
      {quizData.map(data => (
        <div key={data.id}>
          <p>{data.question}</p>
          <ul>
            {data.answers.map(({ answer, isTrue }) => (
              <li key={answer}>{answer}</li>
            ))}
          </ul>
        </div>
      ))}
    </motion.section>
  )
}

export default QuizGame
