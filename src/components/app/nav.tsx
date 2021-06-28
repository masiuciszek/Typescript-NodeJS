import {elements} from "@/styles/styled-record"
import {motion} from "framer-motion"
import AnimateWrapper from "../common/animate-wrapper"
import styled from "@emotion/styled"
import paths from "../../data/routes.json"
import Link from "next/link"

interface Props {
  showConfig: boolean
}

const NavList = styled(motion.ul)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${elements.paragraph};
  z-index: 3;
  padding: 1rem;
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  border: 2px solid ${elements.headline};

  li {
    font-size: 1.2em;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: ${elements.background};
    text-transform: uppercase;
  }
`

export const Navigation = ({showConfig}: Props) => {
  return (
    <nav>
      <AnimateWrapper isOn={showConfig}>
        <NavList initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
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
    </nav>
  )
}

export default Navigation
