import { cx } from "@emotion/css"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"

interface Props {
  isAnimated: boolean
  options?: {
    initial?: Record<string, number | string>
    animate?: Record<string, number | string>
    exit?: Record<string, number | string>
  }
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
          animate={{ opacity: 0, x: 0 }}
          exit={{ opacity: 0, x: -1000 }}
          {...options}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  )
}
