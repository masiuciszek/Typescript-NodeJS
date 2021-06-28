import styled from "@emotion/styled"
import routes from "../../data/routes.json"
import Link from "next/link"
import {elements, elevations} from "@/styles/styled-record"
import {motion} from "framer-motion"

const FooterStyles = styled.footer`
  margin-top: auto;
  min-height: calc(100vh - 90vh);
  display: grid;
  align-items: center;
  justify-content: center;
  align-content: center;
  box-shadow: ${elevations.shadowInner};
  grid-template-columns: 1fr;
  border-top: 2px solid ${elements.stroke};
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`

const FooterTitle = styled.div`
  align-items: center;
  display: flex;
  padding: 0;
  height: 100%;
  h3 {
    margin: 0;
  }
`

const RoutesList = styled.ul`
  display: flex;

  height: 100%;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 0 0.5rem;
  li {
    font-size: 1.1em;
  }
  a {
    color: ${elements.paragraph};
  }
`

export const Footer = () => {
  return (
    <FooterStyles>
      <FooterTitle>
        <h3>React quiz games</h3>
      </FooterTitle>
      <RoutesList>
        {routes.map(({name, path}) => (
          <motion.li key={name} whileHover={{scale: 1.1}}>
            <Link href={path}>
              <a>{name}</a>
            </Link>
          </motion.li>
        ))}
      </RoutesList>
    </FooterStyles>
  )
}
