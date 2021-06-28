import Layout from "@/components/app/layout"
import Seo from "@/components/common/seo"
import Title from "@/components/common/title"
import Link from "next/link"
import styled from "@emotion/styled"
import quizPaths from "../data/routes.json"

const RoutesList = styled.ul`
  display: grid;
  grid-template-columns: 2fr;
  border: 1px solid red;
`

export default function Home() {
  return (
    <>
      <Seo />
      <Layout>
        <Title title="React quiz app" />
        <RoutesList>
          {quizPaths.map(({name, path}) => (
            <li key={name}>
              <Link href={`quiz/${path}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </RoutesList>
      </Layout>
    </>
  )
}
