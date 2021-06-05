import { FC } from "react"
import { css, cx } from "@emotion/css"
import { Link } from "react-router-dom"
import { quizzesComponentsPath } from "../../data"
import { motion } from "framer-motion"
import { colors } from "../../styles/common"

const navListStyles = css`
  display: flex;
  position: fixed;
  top: -1rem;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.darkestShadow};
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  li {
    margin-bottom: 1rem;
    font-size: 2rem;
    a {
      color: ${colors.text};
    }
  }
  @media (min-width: 500px) {
    width: 70%;
  }
`
interface Props {
  className?: string
}
const NavList: FC<Props> = ({ className }) => {
  return (
    <motion.ul
      className={cx(navListStyles, className)}
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -1000 }}
      transition={{ damping: 3, stiffness: 59 }}
    >
      <motion.li whileHover={{ scale: 1.1 }}>
        <Link to="/"> home </Link>
      </motion.li>
      {quizzesComponentsPath.map(({ path, name }) => (
        <motion.li key={name} whileHover={{ scale: 1.1 }}>
          <Link to={path}>{name}</Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default NavList
