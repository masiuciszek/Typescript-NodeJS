import {useRouter} from "next/dist/client/router"

interface Props {}

const END_POINTS = {
  WITH_STATE: "with-state",
  WITH_REDUCER: "with-reducer",
  WITH_XSTATE: "with-xstate",
  WITH_RECOIL: "with-recoil",
} as const

// TODO: Func to decide what quiz app we will render
const getQuizApp = (endPoint: keyof typeof END_POINTS | undefined) => {
  if (endPoint) {
    switch (endPoint) {
      case "WITH_STATE":
        return "with-state-component"

      default:
        return "message component"
    }
  }
  return "message"
}

const QuizItem = () => {
  const router = useRouter()
  const slug = router.query.slug as keyof typeof END_POINTS
  return (
    <div>
      <h1>QuizItem</h1>
      {getQuizApp(slug)}
    </div>
  )
}

export default QuizItem
