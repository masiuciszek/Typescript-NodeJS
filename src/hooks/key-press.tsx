import {useEffect} from "react"
import useToggle from "./toggle"

function useKeyPress(targetKey: string) {
  const {state: keyPressed, toFalse, toTrue} = useToggle()
  const {state: isKeyDown, toFalse: keyDownToFalse, toTrue: keyDownTorTrue} = useToggle()
  const {state: isKeyUp, toFalse: keyUpToFalse, toTrue: keyUpTorTrue} = useToggle()

  const downHandler = ({key}: KeyboardEvent): void => {
    if (key === targetKey) {
      toTrue()
      keyDownToFalse()
      keyDownTorTrue()
    }
  }
  const upHandler = ({key}: KeyboardEvent): void => {
    console.log("keyup")
    if (key === targetKey) {
      toFalse()
      keyUpTorTrue()
      keyDownToFalse()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler)
    window.addEventListener("keyup", upHandler)

    return () => {
      window.removeEventListener("keydown", downHandler)
      window.removeEventListener("keyup", upHandler)
    }
  }, [])

  return [keyPressed, isKeyDown, isKeyUp]
}

export default useKeyPress
