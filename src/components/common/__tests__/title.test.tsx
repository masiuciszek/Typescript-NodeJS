import {render, screen} from "@testing-library/react"
import Title from "../title"

describe("Title", () => {
  test("when only title prop is provided ", () => {
    const title = "title"
    render(<Title title={title} />)

    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
