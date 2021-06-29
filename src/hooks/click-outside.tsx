import {RefObject, useEffect} from "react"

type HandlerEvent = MouseEvent | TouchEvent
type Handler = (event: HandlerEvent) => void

const useClickOutSide = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
) => {
  useEffect(() => {
    const listener = (e: HandlerEvent) => {
      const element = ref?.current
      if (!element || element.contains(e.target as Node)) {
        return
      }
      handler(e)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchcancel", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchcancel", listener)
    }
  }, [handler, ref])
}

export default useClickOutSide
