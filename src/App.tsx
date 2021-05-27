import { FC } from "react"
import Routes from "./routes"
import styled from "@emotion/styled"

const Main = styled.main`
  border: 1px solid #000;
  max-width: 900px;
  margin: auto;
  min-height: 100vh;
  display: grid;
  align-items: center;
`

const Layout: FC = ({ children }) => {
  return <Main>{children}</Main>
}

const App = () => (
  <Layout>
    <Routes />
  </Layout>
)

export default App
