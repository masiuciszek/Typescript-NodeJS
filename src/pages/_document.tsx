// import Document, {
//   Html,
//   Head,
//   Main,
//   NextScript,
//   DocumentContext,
// } from "next/document"
// import * as React from "react"
// import {renderStatic} from "../shared/renderer"
// export default class AppDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext) {
//     const page = await ctx.renderPage()
//     const {css, ids} = await renderStatic(page.html)
//     const initialProps = await Document.getInitialProps(ctx)
//     return {
//       ...initialProps,
//       styles: (
//         <React.Fragment>
//           {initialProps.styles}
//           <style
//             data-emotion={`css ${ids.join(" ")}`}
//             dangerouslySetInnerHTML={{__html: css}}
//           />
//         </React.Fragment>
//       ),
//     }
//   }

//   render() {
//     return (
//       <Html>
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }

import * as React from "react"
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"
import createEmotionServer from "@emotion/server/create-instance"
import {cache} from "@emotion/css"

const {extractCritical} = createEmotionServer(cache)

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(" ")}
            dangerouslySetInnerHTML={{__html: styles.css}}
          />
        </>
      ),
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
