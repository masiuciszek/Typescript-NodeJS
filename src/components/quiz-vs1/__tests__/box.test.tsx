import { fireEvent, render, screen } from "@testing-library/react"
import { Box } from "../box"

describe("box", () => {
  test("renders correctly", () => {
    const questions = [
      {
        id: 1,
        question: "What was the name of Harry Potters Mom",
        answers: [
          { text: "Lilly", isCorrect: true },
          { text: "Tina", isCorrect: false },
          { text: "Linda", isCorrect: false },
        ],
      },
      {
        id: 2,
        question: "What is the capital of Thailand",
        answers: [
          { text: "Hua hin", isCorrect: false },
          { text: "Bangkok", isCorrect: true },
          { text: "Poznan", isCorrect: false },
        ],
      },
      {
        id: 3,
        question: "What year did Covid-19 break out?",
        answers: [
          { text: "2020", isCorrect: false },
          { text: "2018", isCorrect: false },
          { text: "2019", isCorrect: true },
        ],
      },
    ]

    let currentQuestion = 0
    const handleClick = jest.fn().mockImplementation(() => (currentQuestion += 1))

    render(
      <Box questions={questions} currentQuestion={currentQuestion} handleClick={handleClick} />
    )

    // We are on the first question
    expect(screen.getByText(questions[0].question)).toBeInTheDocument()
    questions[0].answers.forEach(a => {
      expect(screen.getByText(a.text)).toBeInTheDocument()
    })

    // We choose Lilly as a answer which should be the correct answer
    fireEvent.click(screen.getByRole("button", { name: /lilly/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
