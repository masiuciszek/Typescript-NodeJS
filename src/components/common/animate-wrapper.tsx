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
  <AnimatePresence exitBeforeEnter>{isOn && children}</AnimatePresence>
)
export default AnimateWrapper
