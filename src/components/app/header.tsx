import styled from "@emotion/styled"
import paths from "../../data/routes.json"
import Link from "next/link"
import useToggle from "src/hooks/toggle"
import Button from "@/components/styled/button"
import {motion} from "framer-motion"
import Cmd from "@/components/common/icons/cmd"
import {css} from "@emotion/react"
import AnimateWrapper from "@/components/common/animate-wrapper"
import useKeyPress from "@/hooks/key-press"
import {useEffect} from "react"
import {elements} from "@/styles/styled-record"

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

const NavList = styled(motion.ul)`
  background-color: ${elements.background};
  padding: 1rem;
  min-width: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    font-size: 1.2em;
  }

  a {
    text-decoration: none;
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
    <header>
      <h1>Header</h1>

      <Button onClick={toggleConfig} incomingStyles={cmdButtonStyles}>
        <Cmd /> <span>cmd+k</span>
      </Button>

      <nav>
        <AnimateWrapper isOn={showConfig}>
          <NavList initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <li>
              <Link href="/">
                <a>home</a>
              </Link>
            </li>
            {paths.map(({name, path}) => (
              <li key={name}>
                <Link href={`/quiz/${path}`}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </NavList>
        </AnimateWrapper>
      </nav>
    </header>
  )
}
