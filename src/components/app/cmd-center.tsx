import {elements, elevations} from "@/styles/styled-record"
import {css} from "@emotion/react"
import styled from "@emotion/styled"
import {motion} from "framer-motion"
import React from "react"
import ReactDOM from "react-dom"
import paths from "../../data/routes.json"
import socialMedia from "../../data/social-media.json"
import Link from "next/link"

interface Props {}

const Body = styled(motion.div)`
  background-color: ${elements.background};
  padding: 1rem;
  border-radius: 4px;
  box-shadow: ${elevations.shadowLg};
  border: 1px solid ${elements.paragraph};
`

const CmdCenter: React.FC<Props> = ({}) => {
  return ReactDOM.createPortal(
    <motion.div
      initial={{scale: 0.7, opacity: 0, x: "-50%"}}
      animate={{scale: 1, opacity: 1, x: 0}}
      exit={{scale: 0.5, opacity: 0, x: "-50%", transition: {duration: 0.15, delay: 0.1}}}
      tabIndex={-1}
      css={css`
        position: fixed;
        background-color: ${elements.lightBlueShadow};
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Body
        initial={{scale: 0.7, opacity: 0}}
        animate={{scale: 1, opacity: 1, transition: {duration: 0.2, delay: 0.2}}}
        exit={{scale: 0.5, opacity: 0, transition: {duration: 0.15, delay: 0.2}}}
      >
        <ul
          className="navigation"
          css={css`
            min-width: 30rem;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
          `}
        >
          {paths.map(({name, path}) => (
            <motion.li key={name} whileHover={{scale: 1.1}}>
              <Link href={`/quiz/${path}`}>
                <a
                  css={css`
                    color: ${elements.paragraph};
                    cursor: pointer;
                  `}
                >
                  {name}
                </a>
              </Link>
            </motion.li>
          ))}
        </ul>
        <hr />
        <ul
          className="social-media"
          css={css`
            display: flex;
            justify-content: space-between;
            padding: 1rem;
          `}
        >
          {socialMedia.map(({name, url}) => (
            <motion.li key={name} whileHover={{scale: 1.1}}>
              <a
                css={css`
                  color: ${elements.paragraph};
                `}
                href={url}
              >
                {name}
              </a>
            </motion.li>
          ))}
        </ul>
      </Body>
    </motion.div>,

    document.body,
  )
}
export default CmdCenter
