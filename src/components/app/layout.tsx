import {FC} from "react"
import {Header} from "./header"
import {Main} from "./main"

const Layout: FC = ({children}) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
