import {render, screen} from "@testing-library/react"
import HomePage from "../"

describe("Home page", () => {
  test("everything should be rendered and displayed as expected", () => {
    render(<HomePage />)

    expect(screen.getByText(/react quiz app/i)).toBeInTheDocument()

    screen.debug()
  })
})
