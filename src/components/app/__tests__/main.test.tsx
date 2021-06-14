import {render, screen} from "@testing-library/react"
import {Main} from "../main"

describe("main", () => {
  test("renders children ", () => {
    render(
      <Main>
        <p>children</p>
      </Main>,
    )
    // screen.debug()
  })
})
