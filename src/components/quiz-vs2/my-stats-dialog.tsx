import { css } from "@emotion/css"
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
  ul {
    position: relative;
    background-color: ${colors.bg};
    padding: 1rem 2rem;
    border-radius: 4px;
    display: flex;
    flex-flow: column wrap;
    li {
      font-size: 1.2em;
      display: flex;
      justify-content: space-between;
      flex-flow: column wrap;
      p {
        max-width: 14rem;
        span {
          color: ${colors.accent};
          text-shadow: 1px 1px ${colors.primary};
          margin-left: 0.3rem;
        }
      }
      @media (min-width: 550px) {
        flex-flow: row wrap;
      }
      &:not(:last-child) {
        border-bottom: 1px solid ${colors.accent};
      }
    }
    .exit-btn {
      ${resetBtnStyles};
      background-color: ${colors.accent};
      color: ${colors.bg};
      position: absolute;
      top: -1rem;
      right: -0.5rem;
      height: 2.5rem;
      width: 2.5rem;
      border: none;
      border-radius: 50%;
      font-size: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

const getQuestion = (questions: Quiz[]) => (questionId: number) =>
  questions.find(q => q.id === questionId)

const MyStatsModal = ({ answeredQuestions, isMyStatsModalOpen, closeMyStatsModal }: Props) => {
  const getQuestionRelatedToYourAnswer = getQuestion(questions)

  return (
    <Fade isAnimated={isMyStatsModalOpen} className={styles}>
      <ul>
        {answeredQuestions.map(({ id, prefix }) => {
          console.log({ id, prefix })
          return (
            <li key={id}>
              <p>{getQuestionRelatedToYourAnswer(id)?.question}</p>
              <p>
                <span>You answered:</span> {prefix}
              </p>
            </li>
          )
        })}
        <li>
          <button className="exit-btn" type="button" onClick={closeMyStatsModal}>
            &#xd7;
          </button>
        </li>
      </ul>
    </Fade>
  )
}
export default MyStatsModal
