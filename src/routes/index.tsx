import { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

const HomePage = lazy(() => import("../components/pages"))
const QuizV1 = lazy(() => import("../components/quiz-vs1"))

const Routes = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/q1" component={QuizV1} />
      </Switch>
    </Suspense>
  )
}

export default Routes
