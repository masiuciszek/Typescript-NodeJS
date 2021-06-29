import {FC} from "react"
import {css} from "@emotion/react"

const mainStyles = css`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  min-height: calc(100vh - 340px);
`

export const Main: FC = ({children}) => {
  return <main css={mainStyles}>{children}</main>
}
