import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { colors, elevations, resetBtnStyles } from "../../styles/common"

interface Answer {
  text: string
  isCorrect: boolean
}

interface Quiz {
  id: number
  question: string
  answers: Array<Answer>
}

interface Props {
  handleClick: (isCorrect: boolean) => void
  currentQuestion: number
  questions: Quiz[]
}

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

export const Box = ({ questions, currentQuestion, handleClick }: Props) => (
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
)
