import { cx } from "@emotion/css"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { AnimatedOptions } from "../../types"

interface Props {
  isAnimated: boolean
  options?: AnimatedOptions
  className?: string
}

export const Fade: React.FC<Props> = ({ isAnimated, children, options, className }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {isAnimated && (
        <motion.section
          className={cx(className)}
          layout
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -1000 }}
          {...options}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  )
}
