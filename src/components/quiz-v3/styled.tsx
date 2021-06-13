import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { resetBtnStyles } from "../../styles/common"
import { BUTTON_WIDTH } from "./utils"

export const Button = styled(motion.button)`
  ${resetBtnStyles};
  min-width: ${BUTTON_WIDTH}rem;
`
