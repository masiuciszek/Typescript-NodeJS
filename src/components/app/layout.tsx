import {FC} from "react"
import {Main} from "./main"

interface Props {}

const Layout: FC<Props> = ({children}) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  )
}

export default Layout
// export const getLayout = (page: JSX.Element) => <Layout>{page}</Layout>
