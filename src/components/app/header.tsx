import styled from "@emotion/styled"
import paths from "../../data/routes.json"
import Link from "next/link"

const NavList = styled.ul`
  /*  */
`

export const Header = () => {
  return (
    <header>
      <h1>Header</h1>

      <nav>
        <NavList>
          {paths.map(({name, path}) => (
            <li key={name}>
              <Link href={`/quiz/${path}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </NavList>
      </nav>
    </header>
  )
}
