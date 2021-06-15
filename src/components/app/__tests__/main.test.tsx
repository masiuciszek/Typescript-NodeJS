import {render, screen} from "@testing-library/react"
import {Main} from "../main"

describe("main", () => {
  test("renders children ", () => {
    render(
      <Main>
        <p>ssadsa</p>
      </Main>,
    )
    expect(5).toBe(5)
    // screen.debug()
  })
})
