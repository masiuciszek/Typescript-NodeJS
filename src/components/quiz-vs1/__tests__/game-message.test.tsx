import { render, screen } from "@testing-library/react"
import { GameMessage } from "../game-message"

describe("game message", () => {
  test("should render content when osOn isTrue", () => {
    const isOn = true
    render(
      <GameMessage isOn={isOn}>
        <p>hello</p>
      </GameMessage>
    )
    expect(screen.getByText(/hello/i)).toBeInTheDocument()
  })
  test("should NOT render the content when isOn is falsy", () => {
    const isOn = false
    render(
      <GameMessage isOn={isOn}>
        <p>hello</p>
      </GameMessage>
    )
    expect(screen.queryByText(/hello/i)).not.toBeInTheDocument()
  })
})
