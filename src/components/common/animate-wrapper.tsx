import {FC} from "react"
import {AnimatePresence, motion} from "framer-motion"
import {elements} from "@/styles/styled-record"
import {css, SerializedStyles} from "@emotion/react"

interface Props {
  isOn?: boolean
  incomingStyles?: SerializedStyles
  config?: Record<string, string | number | boolean | Record<string, string | number | boolean>>
}

const styles = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 5;
  background-color: ${elements.blueishShadow};
  display: flex;
  justify-content: center;
  align-items: center;
`

const AnimateWrapper: FC<Props> = ({children, isOn, incomingStyles, config}) => (
  <AnimatePresence exitBeforeEnter>
    {isOn && (
      <motion.section
        css={css`
          ${styles};
          ${incomingStyles};
        `}
        initial={{opacity: 0, x: -1000}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -1000}}
        layout
        {...config}
      >
        {children}
      </motion.section>
    )}
  </AnimatePresence>
)
export default AnimateWrapper
