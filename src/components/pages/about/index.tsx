import Layout from "../../layout"

const TOOLS = [
  { name: "useState", url: "" },
  { name: "reducer", url: "" },
  { name: "xstate", url: "" },
  // Maybe Recoil ?
]

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        Quiz application, the main goal with this application is to build a quiz game in React with
        different React tools.
      </p>
      <p>Tools like:</p>
      <ul>
        {TOOLS.map(({ name, url }) => (
          <li key={name}>
            <a href={url}>{name}</a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default AboutPage
