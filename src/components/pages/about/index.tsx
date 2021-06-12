import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { colors } from "../../../styles/common"
import Layout from "../../layout"

const techniques = [
  { name: "useState", url: "https://reactjs.org/docs/hooks-state.html" },
  { name: "reducer", url: "https://reactjs.org/docs/hooks-reference.html" },
  { name: "xstate", url: "https://xstate.js.org/docs/" },
  // Maybe Recoil ?
]

const Section = styled.section`
  display: flex;
  flex-flow: column wrap;
  padding: 1rem;
`

const Wrapper = styled.div``

const List = styled.ul`
  padding: 0.5rem;
  display: flex;
  justify-content: center;

  li {
    margin-bottom: 0.4rem;
    background-color: transparent;
    padding: 0.5rem;
    border-radius: 3px;
    a {
      display: block;
    }
  }
`

const AboutPage = () => {
  return (
    <Layout>
      <Section>
        <h1>About</h1>
        <p>
          Quiz application, the main goal with this application is to build a quiz game in React
          with different React Techniques.
        </p>
        <Wrapper>
          <p>Techniques like:</p>
          <List>
            {techniques.map(({ name, url }) => (
              <motion.li
                key={name}
                whileHover={{
                  rotate: -1,
                  scale: 1.145,
                  zIndex: 2,
                  backgroundColor: colors.dangerShadow,
                }}
              >
                <a href={url}>{name}</a>
              </motion.li>
            ))}
          </List>
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default AboutPage
