import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { colors, resetBtnStyles } from "../../styles/common"
import { Fade } from "../common/fade"
import { questions } from "./data"

interface Props {
  answeredQuestions: { id: number; prefix: string }[]
  isMyStatsModalOpen: boolean
  closeMyStatsModal: () => void
}

interface Answer {
  text: string
  prefix: string
  isCorrect: boolean
}

interface Quiz {
  id: number
  question: string
  answers: Answer[]
}

const styles = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.warningShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  z-index: 3;
`

const StatsList = styled(motion.ul)`
  padding: 1rem;
  position: relative;
  .wrapper {
    background-color: ${colors.bg};
    display: grid;
    grid-template-columns: 1fr;
    padding: 2rem;
    border-radius: 4px;
    font-size: 1.2em;
    width: 35rem;
    @media (max-width: 600px) {
      max-width: 20rem;
      max-height: 28rem;
      overflow: scroll;
    }
  }
  p {
    span {
      color: ${colors.accent};
      text-shadow: 1px 1px ${colors.primary};
      margin-left: 0.3rem;
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.accent};
  }
  .exit-btn {
    ${resetBtnStyles};
    background-color: ${colors.accent};
    color: ${colors.bg};
    position: absolute;
    top: -0.3rem;
    right: 0.5rem;
    height: 2.5rem;
    width: 2.5rem;
    border: none;
    border-radius: 50%;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const getQuestion = (questions: Quiz[]) => (questionId: number) =>
  questions.find(q => q.id === questionId)

const MyStatsModal = ({ answeredQuestions, isMyStatsModalOpen, closeMyStatsModal }: Props) => {
  const getQuestionRelatedToYourAnswer = getQuestion(questions)

  return (
    <Fade isAnimated={isMyStatsModalOpen} className={styles}>
      <StatsList initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layout>
        <li className="wrapper">
          {answeredQuestions.map(({ id, prefix }) => (
            <li key={id}>
              <p>{getQuestionRelatedToYourAnswer(id)?.question}</p>
              <p>
                <span>You answered:</span> {prefix}
              </p>
            </li>
          ))}
          <li>
            <button className="exit-btn" type="button" onClick={closeMyStatsModal}>
              &#xd7;
            </button>
          </li>
        </li>
      </StatsList>
    </Fade>
  )
}
export default MyStatsModal
