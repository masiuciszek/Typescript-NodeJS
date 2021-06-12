import styled from "@emotion/styled"
import { useMachine } from "@xstate/react"
import { AnimatePresence, motion } from "framer-motion"
import { assign, createMachine, Interpreter } from "xstate"
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
  {
    id: 1,
    question: "Who won world cup in football 2002?",
    answers: [
      { answer: "Brail", isTrue: true },
      { answer: "Germany", isTrue: false },
      { answer: "France", isTrue: false },
    ],
  },
]

interface QuizGameContext {
  score: number
  currentQuestion: number
  quizData: Array<QuizData>
}

type QuizMachineEvent =
  | { type: "TOGGLE" }
  | { type: "CLICK" }
  | { type: "SELECT" }
  | { type: "NEXT" }

const quizMachine = createMachine<QuizGameContext, QuizMachineEvent>(
  {
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
          SELECT: {
            target: "select",
          },
        },
      },
      select: {
        initial: "gameOn",
        states: {
          gameOn: {
            entry: "nextQuestion",
            on: {
              NEXT: {
                target: "#quiz.active",
              },
            },
          },
        },
      },
    },
  },
  {
    actions: {
      nextQuestion: assign({
        currentQuestion: context => context.currentQuestion + 1,
      }),
    },
  }
)

const Wrapper = styled.section`
  border: 1px solid red;
  min-height: 65vh;
`

const BtnWrapper = styled.div`
  display: flex;
`

const QuizGame = () => {
  const [state, send] = useMachine(quizMachine)

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
          {state.value === "active" && (
            <button type="button" onClick={() => send("TOGGLE")}>
              {" "}
              Close game
            </button>
          )}
        </BtnWrapper>

        <AnimatePresence presenceAffectsLayout>
          {state.matches("active") && (
            <QuizBox
              quizData={state.context.quizData}
              send={send}
              currentQuestion={state.context.currentQuestion}
            />
          )}
        </AnimatePresence>
      </Wrapper>
    </Layout>
  )
}

interface QuizBoxProps {
  quizData: Array<QuizData>
  send: Interpreter<QuizGameContext, any, QuizMachineEvent>["send"]
  currentQuestion: number
}

function QuizBox({ quizData, send, currentQuestion }: QuizBoxProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <div>
        <p>{quizData[currentQuestion].question}</p>
        <ul>
          {quizData[currentQuestion].answers.map(({ answer, isTrue }) => (
            <li key={answer}>
              <button
                onClick={() => {
                  send("SELECT")
                }}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}

export default QuizGame
