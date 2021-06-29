import Layout from "@/components/app/layout"
import Seo from "@/components/common/seo"
import Title from "@/components/common/title"
import Link from "next/link"
import styled from "@emotion/styled"
import quizPaths from "../data/routes.json"
import {css} from "@emotion/react"
import {elements} from "@/styles/styled-record"
import {motion} from "framer-motion"

const RoutesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
    padding: 1rem;
    a {
      color: ${elements.stroke};
      font-size: 2rem;
    }
  }
`

export default function Home() {
  return (
    <>
      <Seo />
      <Layout>
        <Title>
          <Intro />
        </Title>
        <RoutesList>
          {quizPaths.map(({name, path}) => (
            <motion.li key={name} whileHover={{scale: 1.1, rotate: 2}}>
              <Link href={`quiz/${path}`}>
                <a>{name}</a>
              </Link>
            </motion.li>
          ))}
        </RoutesList>
      </Layout>
    </>
  )
}

function Intro() {
  return (
    <h1
      css={css`
        font-size: 3rem;
        padding: 1rem;
        line-height: 1.5;
        margin: 1rem 0; ;
      `}
    >
      Welcome to React Quiz game app.Here where we have the same quiz but using different techniques
      with in React. We use tools like, simple useState, useReducer, state machines(X-state) and we
      will also try out Recoil as a state manager . Hope you like it
    </h1>
  )
}
