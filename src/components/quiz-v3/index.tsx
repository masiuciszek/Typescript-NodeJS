import styled from "@emotion/styled"
import { useMachine } from "@xstate/react"
import { AnimatePresence, motion } from "framer-motion"
import { assign, createMachine, EventObject, Interpreter } from "xstate"
import Layout from "../layout"

function assertEventType<TE extends EventObject, TType extends TE["type"]>(
  event: TE,
  eventType: TType
): asserts event is TE & { type: TType } {
  if (event.type !== eventType) {
    throw new Error(`Invalid event: expected "${eventType}", got "${event.type}"`)
  }
}

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
      { answer: "England", isTrue: false },
      { answer: "Italy", isTrue: false },
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
  | { type: "NEXT"; isTrue: boolean }
  | { type: "START" }

const quizMachine = createMachine<QuizGameContext, QuizMachineEvent>(
  {
    id: "quiz",
    initial: "idle",
    context: {
      score: 0,
      currentQuestion: 0,
      quizData,
    },
    states: {
      idle: {
        on: {
          TOGGLE: {
            target: "active",
          },
        },
      },
      active: {
        always: [{ target: "finalQuestion", cond: "isOnLastQuestion" }],
        on: {
          NEXT: {
            actions: ["nextQuestion", "incrementScore"],
          },
        },
      },
      finalQuestion: {
        on: {
          NEXT: {
            actions: ["incrementScore"],
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
      incrementScore: assign({
        score: ({ score }, event) => {
          if (event.type === "NEXT") {
            return event.isTrue ? score + 1 : score
          }
          return score
        },
      }),
    },
    guards: {
      isAnswerCorrect: (_, event) => {
        if (event.type === "NEXT") {
          return event.isTrue
        }
        return false
      },
      isNotOnLastQuestion: context => context.quizData.length - 1 !== context.currentQuestion,
      isOnLastQuestion: context => context.quizData.length - 1 === context.currentQuestion,
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
  console.log("state.context", state.context)

  const showQuestions = state.value === "active" || state.value === "finalQuestion"

  return (
    <Layout>
      <Wrapper>
        <h1>QuizGFame 3</h1>
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

        <AnimatePresence presenceAffectsLayout>
          {showQuestions && (
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
                  send("NEXT", { isTrue })
                  console.log("foooo")
                  // send("SELECT")
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
