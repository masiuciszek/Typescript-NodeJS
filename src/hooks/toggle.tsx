import { useState } from "react"
import produce from "immer"

interface Toggle {
  state: boolean
  stateToFalse: () => void
  toggle: () => void
  stateToTrue: () => void
}

const useToggle = (initialState = false): Toggle => {
  const [state, setState] = useState<boolean>(initialState)

  const toggle = (): void => {
    setState(produce(prev => !prev))
  }
  const stateToFalse = (): void => {
    setState(false)
  }
  const stateToTrue = (): void => {
    setState(true)
  }

  return { state, toggle, stateToFalse, stateToTrue }
}

export { useToggle }
