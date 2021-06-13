import { motion } from "framer-motion"
import { FC } from "react"
import { Interpreter, StateValue } from "xstate"
import { QuizData, QuizGameContext, QuizMachineEvent } from "./utils"

interface Props {
  quizData: Array<QuizData>
  send: Interpreter<QuizGameContext, any, QuizMachineEvent>["send"]
  currentQuestion: number
  currentState: StateValue
}

export const QuizBox: FC<Props> = ({ quizData, send, currentQuestion, currentState }) => {
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
                type="button"
                disabled={currentState === "endOfQuiz"}
                onClick={() => {
                  const nextQuestion = currentQuestion + 1
                  send("NEXT", {
                    isTrue,
                    hasAnsweredLastQuestion: nextQuestion === quizData.length,
                  })
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
