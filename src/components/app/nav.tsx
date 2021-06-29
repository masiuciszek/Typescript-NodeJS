import {elements} from "@/styles/styled-record"
import {motion} from "framer-motion"
import AnimateWrapper from "../common/animate-wrapper"
import styled from "@emotion/styled"
import paths from "../../data/routes.json"
import Link from "next/link"
import {css} from "@emotion/react"
import useMediaQuery from "@/hooks/media-query"
import {matches} from "lodash"
import CmdCenter from "./cmd-center"

interface Props {
  showMenu: boolean
}

const NavList = styled(motion.ul)`
  justify-content: space-between;
  display: flex;
  align-items: center;
  border-radius: 4px;
  list-style: none;
  width: 45rem;
  li {
    font-size: 1.2em;
  }

  a {
    text-decoration: none;
    color: ${elements.paragraph};
    text-transform: uppercase;
  }
`

export const Navigation = ({showMenu}: Props) => {
  const matches = useMediaQuery("(min-width:950px)")
  return (
    <nav
      css={css`
        position: relative;
        display: flex;
        flex: 1;
        justify-content: center;
        padding: 1rem; ;
      `}
    >
      <AnimateWrapper isOn={matches}>
        <NavList
          initial={{opacity: 0, scale: 0.7}}
          animate={{opacity: 1, scale: 1}}
          exit={{opacity: 0, scale: 0.7}}
        >
          <motion.li whileHover={{scale: 1.1}}>
            <Link href="/">
              <a>home</a>
            </Link>
          </motion.li>
          {paths.map(({name, path}) => (
            <motion.li key={name} whileHover={{scale: 1.1}}>
              <Link href={`/quiz/${path}`}>
                <a>{name}</a>
              </Link>
            </motion.li>
          ))}
        </NavList>
      </AnimateWrapper>

      <AnimateWrapper isOn={showMenu}>
        <CmdCenter />
      </AnimateWrapper>
    </nav>
  )
}

export default Navigation
