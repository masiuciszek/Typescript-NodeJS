import {useEffect, useState} from "react"
import useHasMounted from "./mounted"

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)
  const hasMounted = useHasMounted()

  useEffect(() => {
    const media = hasMounted ? window.matchMedia(query) : null
    if (media && matches !== media.matches) {
      setMatches(media?.matches ?? false)
    }

    const listener = () => {
      setMatches(media?.matches ?? false)
    }

    media?.addEventListener("change", listener)
    return () => media?.removeEventListener("change", listener)
  })
  return matches
}

export default useMediaQuery
