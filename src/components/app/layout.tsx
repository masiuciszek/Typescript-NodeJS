import {FC} from "react"
import {Main} from "./main"

const Layout: FC = ({children}) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  )
}

export default Layout
// export const getLayout = (page: JSX.Element) => <Layout>{page}</Layout>
