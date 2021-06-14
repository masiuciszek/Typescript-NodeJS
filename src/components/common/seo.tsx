import Head from "next/head"
import {FC} from "react"

// TODO: make constants file
const CMS_NAME = "React Quiz"

interface Props {
  title?: string
  description?: string
}

const Seo: FC<Props> = ({title, description}) => {
  const META_DESCRIPTION = description
    ? description
    : "Next js app with different quiz versions"
  const TITLE = title ? title : "React quiz app"
  return (
    <Head>
      <title>{TITLE}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="My page title" key="title" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`${META_DESCRIPTION} ${CMS_NAME}.`} />
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
    </Head>
  )
}

export default Seo
