import {elements, elevations} from "@/styles/styled-record"
import {css, SerializedStyles} from "@emotion/react"
import {motion} from "framer-motion"
import {FC} from "react"
import Predicate from "../common/predicate"

interface ButtonProps {
  text?: string
  incomingStyles?: SerializedStyles
  onClick: () => void
}

const BTN_MIN_WIDTH = 8

const styles = css`
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
  box-shadow: ${elevations.shadowM};
  border: 2px solid ${elements.stroke};
  min-width: ${BTN_MIN_WIDTH}rem;
  display: block;
  margin-bottom: 0.5rem;
  color: ${elements.btnText};
  background-color: ${elements.btnBg}; ;
`

const Button: FC<ButtonProps> = ({text, incomingStyles, children, onClick}) => {
  return (
    <motion.button
      whileHover={{
        backgroundColor: elements.btnText,
        color: elements.btnBg,
        width: BTN_MIN_WIDTH + 0.2 + "rem",
      }}
      onClick={onClick}
      type="button"
      css={css`
        ${styles};
        ${incomingStyles}
      `}
    >
      <Predicate condition={Boolean(text)}>{text}</Predicate>
      {children}
      {text}
    </motion.button>
  )
}
export default Button
