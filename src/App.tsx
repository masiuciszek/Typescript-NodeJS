import { FC } from "react"
import Routes from "./routes"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/react"

const Main = styled.main`
  max-width: 900px;
  margin: auto;
  min-height: 100vh;
  display: grid;
  align-items: center;
`

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        :root {
          --dark-purp: #514762;
          --white: #fff;
          --red: #e64c4c;
          --light-blue: #83d8d8;
          --green: #cbe56c;
          --dark-shadow: #4d4d4d;
          --dark: #383243;
          --blue: #3f51b5;

          /* elevations */
          --sh-xs: 0 0 0 1px var(--transparentDark);
          --sh-s: 0 1px 2px 0 var(--transparentDark);
          --sh: 0 1px 3px 0 var(--transparentDark2), 0 1px 2px 0 var(--transparentDark3);
          --sh-m: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --sh-l: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --sh-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          --sh-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.85);
          --sh-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          --sh-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);

          --primary: var(--blue);
          --primaryHighlight: var(--darkPurp-10);
          --accent: var(--light-blue);
          --warning: var(--green);
          --danger: var(--red);
          --text: var(--white);
          --bg: var(--dark-purp);
        }

        *::before,
        *::after,
        * {
          box-sizing: inherit;
        }
        html {
          font-size: 100%;
          box-sizing: border-box;
        } /*16px*/

        body {
          margin: 0;
          padding: 0;
          font-family: "Montserrat Alternates", sans-serif;
          background-color: var(--bg);
          color: var(--text);
          font-weight: 400;
          line-height: 1.75;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          margin: 3rem 0 1.38rem;

          font-weight: 400;
          line-height: 1.3;
        }

        h1 {
          margin-top: 0;
          font-size: 3.052rem;
        }
        h2 {
          font-size: 2.441rem;
        }

        h3 {
          font-size: 1.953rem;
        }

        h4 {
          font-size: 1.563rem;
        }

        h5 {
          font-size: 1.25rem;
        }

        small {
          font-size: 0.8rem;
        }
        ul {
          list-style: none;
        }
      `}
    />
  )
}

const Layout: FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Main>{children}</Main>
    </>
  )
}

const App = () => (
  <Layout>
    <Routes />
  </Layout>
)

export default App
