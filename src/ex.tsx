import { useState } from "react"
import "./App.css"

const quizData = [
  {
    id: 1,
    question: "What football team is the best?",
    answerOptions: [
      { answerText: "Legia Warszawa", prefix: "1", isCorrect: true },
      { answerText: "Lech Poznan", prefix: "x", isCorrect: false },
      { answerText: "CSKA Moskva", prefix: "2", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Best food?",
    answerOptions: [
      { answerText: "Pizza", prefix: "1", isCorrect: false },
      { answerText: "Burgers", prefix: "x", isCorrect: true },
      { answerText: "Fries", prefix: "2", isCorrect: false },
    ],
  },
]

function App() {
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isGameDone, setIsGameDone] = useState(false)

  const handleQuiz = (isCorrect: boolean): void => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setIsGameDone(true)
    }
    if (isCorrect) {
      setScore(prevScore => prevScore + 1)
    }
  }
  console.log(score)

  return (
    <div className="App">
      <h1>{score}</h1>
      {isGameDone && <h1>is game done</h1>}
      <div className="game">
        <div className="body">
          {quizData[currentQuestion].question}
          {quizData[currentQuestion].answerOptions.map(x => (
            <button onClick={() => handleQuiz(x.isCorrect)}>
              <span>{x.prefix}</span> <span>{x.answerText}</span>
            </button>
          ))}
          {/* {quizData.map(x => (
            <div key={x.id} className="row">
              <div className="question">
                <p>{x.question}</p>
              </div>
              <ul className="btn-list">
                {x.answerOptions.map(x => (
                  <li key={x.answerText}>
                    <button onClick={() => handleQuiz(x.isCorrect)}>
                      <span>{x.prefix}</span> <span>{x.answerText}</span>
                    </button>
                  </li>
                ))}
              </ul>{" "}
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default App
