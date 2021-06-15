import {useRouter} from "next/dist/client/router"

interface Props {}

const QuizItem = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h1>QuizItem</h1>
    </div>
  )
}

export default QuizItem
