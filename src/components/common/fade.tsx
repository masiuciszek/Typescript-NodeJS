import { AnimatePresence, motion } from "framer-motion"
import React from "react"

interface Props {
  isAnimated: boolean
  options?: Record<string, any>
}

export const Fade: React.FC<Props> = ({ isAnimated, children, options }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {isAnimated && (
        <motion.section
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
