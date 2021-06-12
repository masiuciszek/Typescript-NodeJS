import { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

const HomePage = lazy(() => import("../components/pages"))
const QuizV1 = lazy(() => import("../components/quiz-vs1"))
const QuizV2 = lazy(() => import("../components/quiz-vs2"))
const QuizV3 = lazy(() => import("../components/quiz-v3"))
const AboutPage = lazy(() => import("../components/pages/about/about-page"))

const Routes = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/q1" component={QuizV1} />
        <Route exact path="/q2" component={QuizV2} />
        <Route exact path="/q3" component={QuizV3} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </Suspense>
  )
}

export default Routes
