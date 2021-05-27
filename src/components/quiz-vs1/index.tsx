import styled from "@emotion/styled"
import produce from "immer"
import { useState } from "react"
import { colors, elevations, resetBtnStyles } from "../../styles/common"
import { AnimatePresence, motion, Variants } from "framer-motion"

const questions = [
  {
    id: 1,
    question: "What was the name of Harry Potters Mom",
    answers: [
      { text: "Lilly", isCorrect: true },
      { text: "Tina", isCorrect: false },
      { text: "Linda", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "What is the capital of Thailand",
    answers: [
      { text: "Hua hin", isCorrect: false },
      { text: "Bangkok", isCorrect: true },
      { text: "Poznan", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "What year did Covid-19 break out?",
    answers: [
      { text: "2020", isCorrect: false },
      { text: "2018", isCorrect: false },
      { text: "2019", isCorrect: true },
    ],
  },
]
const QuizWrapper = styled.section`
  /* border: 1px solid #000; */
  position: relative;
`

const QuizBox = styled(motion.div)`
  border: 1px solid ${colors.accent};
  padding: 0.5em;
  max-width: 800px;
  margin: 0 auto 0.5em;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  min-height: 12rem;
  border-radius: 4px;
  box-shadow: ${elevations.shadowM};
`

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    border-bottom: 2px solid ${colors.accent};
  }
`

const QuizList = styled.ul`
  padding: 0;
  display: flex;
  flex-flow: column wrap;
  li {
    flex: 1;
    display: flex;
    height: 3rem;
    margin-bottom: 0.45em;
    button {
      ${resetBtnStyles};
      flex: 1 0 100%;
    }
  }
`

const GameMessage = styled(motion.div)`
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin-bottom: 3rem;
  position: absolute;
  top: -110%;
  left: 0%;
  padding: 1rem;
  width: 100%;
  button {
    ${resetBtnStyles};
    width: 8rem;
    height: 2rem;
  }
`

const variants = {
  start: { opacity: 0, x: -1000 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 1, x: 1000 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
  },
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [isEnd, setIsEnd] = useState(false)

  const handleClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(produce(prevScore => prevScore + 1))
    }
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(produce(() => nextQuestion))
    } else {
      setIsEnd(produce(() => true))
    }
  }

  const newGame = (): void => {
    setCurrentQuestion(produce(() => 0))
    setScore(produce(() => 0))
    setIsEnd(produce(() => false))
  }

  return (
    <QuizWrapper>
      <AnimatePresence presenceAffectsLayout exitBeforeEnter>
        {isEnd && (
          <GameMessage initial="start" animate="enter" exit="exit" variants={variants}>
            <p>
              you scored {score} / {questions.length} questions
            </p>
            <motion.button
              type="button"
              whileHover={{ backgroundColor: colors.text, color: colors.primary, scale: 1.03 }}
              onClick={newGame}
            >
              New game
            </motion.button>
          </GameMessage>
        )}
      </AnimatePresence>
      <QuizBox
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 1000 }}
      >
        <QuestionWrapper>
          <p>{questions[currentQuestion].question}</p>
        </QuestionWrapper>
        <QuizList>
          {questions[currentQuestion].answers.map(({ text, isCorrect }) => (
            <li key={text}>
              <motion.button
                type="button"
                onClick={() => handleClick(isCorrect)}
                whileHover={{ backgroundColor: colors.text, color: colors.primary, scale: 1.03 }}
              >
                {text}
              </motion.button>
            </li>
          ))}
        </QuizList>
      </QuizBox>
    </QuizWrapper>
  )
}
export default Quiz
