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
import Layout from "@/components/app/layout"

const END_POINTS = {
  WITH_STATE: "with-state",
  WITH_REDUCER: "with-reducer",
  WITH_XSTATE: "with-xstate",
  WITH_RECOIL: "with-recoil",
} as const

type EndPointKeys = keyof typeof END_POINTS
type EndPointValues = typeof END_POINTS[EndPointKeys]

const getQuizApp = (endPoint: EndPointValues) => {
  switch (endPoint) {
    case END_POINTS[WITH_STATE]:
      return <QuizWithState />
    case END_POINTS[WITH_REDUCER]:
      return <QuizWithReducer />
    case END_POINTS[WITH_XSTATE]:
      return <QuizWithXstate />
    case END_POINTS[WITH_RECOIL]:
      return <QuizWithRecoil />
    default:
      return <FallBackComponent endPoint={endPoint} />
  }
}

const QuizItem = () => {
  const router = useRouter()
  const slug = router.query.slug as EndPointValues

  return (
    <>
      <Seo title={`quiz ${slug}`} />
      <Layout>{getQuizApp(slug)}</Layout>
    </>
  )
}

export default QuizItem

function FallBackComponent({endPoint}: {endPoint: EndPointValues}) {
  return (
    <div>
      <h3>No Quiz with endpoint {endPoint}</h3>
    </div>
  )
}
