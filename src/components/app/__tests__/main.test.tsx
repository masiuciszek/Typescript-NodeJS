import {render, screen} from "@testing-library/react"
import {Main as MainComp} from "../main"

describe("main", () => {
  test("renders children", () => {
    render(
      <MainComp>
        <p>children</p>
      </MainComp>,
    )

    expect(screen.getByText(/children/i)).toBeInTheDocument()
  })
})
