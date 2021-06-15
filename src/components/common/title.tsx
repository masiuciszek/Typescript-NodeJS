import {css} from "@emotion/react"
import styled from "@emotion/styled"
import {FC} from "react"
import Predicate from "./predicate"

interface Props {
  incomingStyles?: string
  title?: string
}
const StyledSection = styled.section``

const styles = css``

const Title: FC<Props> = ({children, incomingStyles, title}) => {
  return (
    <StyledSection
      css={css`
        ${styles}
        ${incomingStyles}
      `}
    >
      <Predicate condition={Boolean(title)}>
        {" "}
        <h1>{title}</h1>{" "}
      </Predicate>
      {children}
    </StyledSection>
  )
}

export default Title
