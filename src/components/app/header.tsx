import styled from "@emotion/styled"
import paths from "../../data/routes.json"
import Link from "next/link"
import useToggle from "src/hooks/togle"
import Button from "@/components/styled/button"
import {AnimatePresence, motion} from "framer-motion"

const NavList = styled(motion.ul)``

export const Header = () => {
  const {state: showConfig, toggle: toggleConfig} = useToggle()
  return (
    <header>
      <h1>Header</h1>

      <Button onClick={toggleConfig}> Config ☎️ </Button>

      <nav>
        <AnimatePresence exitBeforeEnter presenceAffectsLayout>
          {showConfig && (
            <NavList
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
              {paths.map(({name, path}) => (
                <li key={name}>
                  <Link href={`/quiz/${path}`}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </NavList>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
