import useToggle from "src/hooks/toggle"
import Button from "@/components/styled/button"
import Cmd from "@/components/common/icons/cmd"
import {css} from "@emotion/react"
import useKeyPress from "@/hooks/key-press"
import {useEffect} from "react"
import {elements, elevations} from "@/styles/styled-record"
import Navigation from "./nav"

const headerStyles = css`
  box-shadow: ${elevations.shadowLg};
  min-height: 8rem;
  border-bottom: 2px solid ${elements.stroke};
  position: relative;
`

const cmdButtonStyles = css`
  min-width: 0;
  width: 5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  span {
    text-shadow: 1px 1px ${elements.paragraph};
  }
`

const CMD_KEY_BOARD_KEY = "Meta"
const K_KEY_BOARD_KEY = "k"

export const Header = () => {
  const {state: showConfig, toggle: toggleConfig} = useToggle()
  const [_, cmdEventIsDown] = useKeyPress(CMD_KEY_BOARD_KEY)
  const [__, kEventIsDown] = useKeyPress(K_KEY_BOARD_KEY)

  const predicate = cmdEventIsDown && kEventIsDown
  useEffect(() => {
    if (predicate) {
      toggleConfig()
    }
  }, [kEventIsDown])

  return (
    <header
      css={css`
        ${headerStyles};
      `}
    >
      <Button onClick={toggleConfig} incomingStyles={cmdButtonStyles}>
        <Cmd /> <span>cmd+k</span>
      </Button>
      <Navigation showConfig={showConfig} />
    </header>
  )
}
