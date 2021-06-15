import GlobalStyles from "@/styles/global-styles"
import {AppProps} from "next/app"

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
