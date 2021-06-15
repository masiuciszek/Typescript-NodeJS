import {Global, css} from "@emotion/react"

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        /* Define Colors as colors */
        --green: #00ebc7;
        --red: #ff5470;
        --yellow: #fde24f;
        --black: #1b2d45;
        --darkBlue: #00214d;
        --grey: #bfbfbf;
        --white: #fefefeee;

        /* Define Colors intentions */
        --background: var(--white);
        --textColor: var(--black);

        /* font type */
        --headingFont: "Proza Libre", sans-serif;
        --bodyFont: "Poppins", sans-serif;

        /* typography sizes */

        --headingOne: 3.052em;
        --headingTwo: 2.441em;
        --headingThree: 1.953em;
        --headingFour: 1.563em;
        --headingFive: 1.25em;

        --smallTag: 0.8em;
      }

      .dark {
        --background: var(--black);
        --textColor: var(--white);
      }

      html {
        font-size: 100%;
      }

      /*16px*/

      body {
        background: var(--background);
        color: var(--textColor);
        font-family: var(--bodyFont);
        font-weight: 400;
        line-height: 1.65;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
        grid-template-rows: auto;
        grid-gap: 3em;
      }

      p {
        margin-bottom: 1.15rem;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin: 2.75rem 0 1.05rem;
        font-family: var(--headingFont);
        font-weight: 400;
        line-height: 1.15;
      }

      h1 {
        margin-top: 0;
        font-size: var(--headingOne);
      }

      h2 {
        font-size: var(--headingTwo);
      }

      h3 {
        font-size: var(--headingThree);
      }

      h4 {
        font-size: var(--headingFour);
      }

      h5 {
        font-size: var(--headingFive);
      }

      small,
      .text_small {
        font-size: var(--smallTag);
      }
    `}
  />
)

export default GlobalStyles
