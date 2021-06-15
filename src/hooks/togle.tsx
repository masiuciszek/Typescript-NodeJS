import {useState} from "react"

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState)

  const toggle = (): void => {
    setState((prev) => !prev)
  }
  const toFalse = (): void => {
    setState(false)
  }
  const toTrue = (): void => {
    setState(true)
  }
  return {state, toggle, toFalse, toTrue}
}

export default useToggle
