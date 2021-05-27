import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { colors } from "../../styles/common"

const quizzesComponentsPath = [
  { path: "/q1", name: "Quiz v1" },
  { path: "/q2", name: "Quiz v2" },
  { path: "/q3", name: "Quiz v3" },
  { path: "/q4", name: "Quiz v4" },
]

const HomeWrapper = styled.section`
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`

const List = styled.ul`
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  li {
    margin-bottom: 0.5em;
    border-bottom: 1px solid ${colors.accent};

    flex: 1 0 50%;
    display: flex;
    min-height: 3rem;
    align-items: center;
    justify-content: center;
    a {
      color: ${colors.text};
      text-decoration: none;
      display: block;
    }
  }
`

const HomePage = () => {
  return (
    <HomeWrapper>
      <h1>Quiz apps</h1>
      <List>
        {quizzesComponentsPath.map(({ path, name }) => (
          <li key={name}>
            {" "}
            <Link to={path}>{name}</Link>{" "}
          </li>
        ))}
      </List>
    </HomeWrapper>
  )
}

export default HomePage
