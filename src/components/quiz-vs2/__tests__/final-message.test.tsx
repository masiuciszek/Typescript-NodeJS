import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { FinalMessage } from "../final-message"

describe("final message", () => {
  let isModalOpen: boolean
  let score: number
  let questionsLength: number

  beforeEach(() => {
    isModalOpen = false
    score = 0
    questionsLength = 0
  })
  test("When isModalOpen set to false, nothing should be rendered", () => {
    const newGame = jest.fn()
    const closeModal = jest.fn()

    render(
      <MemoryRouter>
        <FinalMessage
          isModalOpen={isModalOpen}
          score={score}
          questionsLength={questionsLength}
          newGame={newGame}
          closeModal={closeModal}
        />
      </MemoryRouter>
    )

    expect(screen.queryByRole("button", { name: /new game/i })).not.toBeInTheDocument()
    expect(screen.queryByRole("link", { name: /back home/i })).not.toBeInTheDocument()
  })

  test("When isModalOpen set to true, we should render the content", () => {
    isModalOpen = true
    const newGame = jest.fn()
    const closeModal = jest.fn().mockImplementation(() => {
      isModalOpen = false
    })

    const { rerender } = render(
      <MemoryRouter>
        <FinalMessage
          isModalOpen={isModalOpen}
          score={score}
          questionsLength={questionsLength}
          newGame={newGame}
          closeModal={closeModal}
        />
      </MemoryRouter>
    )

    expect(screen.getByRole("button", { name: /new game/i })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /back home/i })).toBeInTheDocument()

    fireEvent.click(screen.getByRole("button", { name: /new game/i }))
    expect(newGame).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByTestId("close-btn-for-final-message"))
    expect(closeModal).toHaveBeenCalledTimes(1)

    rerender(
      <MemoryRouter>
        <FinalMessage
          isModalOpen={isModalOpen}
          score={score}
          questionsLength={questionsLength}
          newGame={newGame}
          closeModal={closeModal}
        />
      </MemoryRouter>
    )
  })
})
