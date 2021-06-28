import {elements, elevations} from "@/styles/styled-record"
import {css, SerializedStyles} from "@emotion/react"
import {motion} from "framer-motion"
import {FC} from "react"
import Predicate from "../common/predicate"

interface ButtonProps {
  text?: string
  incomingStyles?: SerializedStyles
  onClick: () => void
  config?: Record<string, Record<string, string | number> | string | number>
  disabled?: boolean
}

const BTN_MIN_WIDTH = 4

const styles = css`
  cursor: pointer;
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
  box-shadow: ${elevations.shadowM};
  border: 2px solid ${elements.stroke};
  min-width: ${BTN_MIN_WIDTH}rem;
  display: block;
  margin-bottom: 0.5rem;
  color: ${elements.btnText};
  background-color: ${elements.btnBg};
  &:disabled {
    opacity: 0.6;
    color: ${elements.stroke};
    pointer-events: none;
  }
`

const Button: FC<ButtonProps> = ({text, incomingStyles, children, onClick, config, disabled}) => {
  return (
    <motion.button
      disabled={disabled || false}
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
      {...config}
    >
      <Predicate condition={Boolean(text)}>{text}</Predicate>
      {children}
      {text}
    </motion.button>
  )
}
export default Button
