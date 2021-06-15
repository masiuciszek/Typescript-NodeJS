import {elements} from "@/styles/styled-record"
import {css, SerializedStyles} from "@emotion/react"
import styled from "@emotion/styled"
import {FC} from "react"
import Predicate from "./predicate"

interface Props {
  incomingStyles?: SerializedStyles
  title?: string
}
const StyledSection = styled.section``

const styles = css`
  display: flex;
`

const h1Styles = css`
  position: relative;
  display: inline-block;
  &:before {
    content: "";
    background: ${elements.greyBlueShadow};
    width: 45%;
    height: 0.5rem;
    position: absolute;
    top: 1rem;
    left: 0;
    z-index: -1;
  }

  &:after {
    content: "";
    background: ${elements.lightBlueShadow};
    width: 55%;
    height: 0.5rem;
    position: absolute;
    bottom: 0;
    right: 0.12rem;
    z-index: -1;
  }
`

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
        <h1 css={h1Styles}>{title}</h1>{" "}
      </Predicate>
      {children}
    </StyledSection>
  )
}

export default Title
