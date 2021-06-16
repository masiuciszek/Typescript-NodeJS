import {FC} from "react"
import {Footer} from "./footer"
import {Header} from "./header"
import {Main} from "./main"

const Layout: FC = ({children}) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
