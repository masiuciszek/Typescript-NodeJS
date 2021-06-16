import {useRouter} from "next/dist/client/router"
import QuizWithState from "@/components/quiz/with-state"
import QuizWithReducer from "@/components/quiz/with-reducer"
import QuizWithXstate from "@/components/quiz/with-xstate"
import QuizWithRecoil from "@/components/quiz/with-recoil"
import {
  WITH_RECOIL,
  WITH_REDUCER,
  WITH_STATE,
  WITH_XSTATE,
} from "@/utils/constants"
import Seo from "@/components/common/seo"

const END_POINTS = {
  [WITH_STATE]: "with-state",
  [WITH_REDUCER]: "with-reducer",
  [WITH_XSTATE]: "with-xstate",
  [WITH_RECOIL]: "with-recoil",
} as const

// TODO: Func to decide what quiz app we will render
const getQuizApp = (endPoint: keyof typeof END_POINTS) => {
  switch (endPoint) {
    case WITH_STATE:
      return <QuizWithState />
    case WITH_REDUCER:
      return <QuizWithReducer />
    case WITH_XSTATE:
      return <QuizWithXstate />
    case WITH_RECOIL:
      return <QuizWithRecoil />

    default:
      return "message component"
  }
}

const QuizItem = () => {
  const router = useRouter()
  const slug = router.query.slug as keyof typeof END_POINTS
  return (
    <>
      <Seo title={`quiz ${slug}`} />
      <h1>QuizItem</h1>
      {getQuizApp(slug)}
    </>
  )
}

export default QuizItem
