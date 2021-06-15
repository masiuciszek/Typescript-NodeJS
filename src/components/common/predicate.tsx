import {FC} from "react"

interface PredicateProps {
  condition: boolean
}
const Predicate: FC<PredicateProps> = ({condition, children}) =>
  condition ? <>{children}</> : null

export default Predicate
