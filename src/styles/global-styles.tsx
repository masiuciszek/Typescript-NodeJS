import {Global, css} from "@emotion/react"

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        /* Define Colors as colors */
        --green: #00ebc7;
        --red: #ef4565;
        --yellow: #fde24f;
        --black: #1b2d45;
        --darkBlue: #00214d;
        --grey: #bfbfbf;
        --white: #fefefeee;

        --greyish: #5f6c7b;
        --blueish: #094067;
        --whitish: #fffffe;
        --light-blue: #3da9fc;
        --grey-blue: #90b4ce;
        --blueish-shadow: rgba(9, 64, 103, 0.6);
        --light-blue-shadow: rgba(61, 169, 252, 0.6);
        --grey-blue-shadow: rgba(144, 180, 206, 0.6);

        /* Elements */
        --paragraph: var(--greyish);
        --headline: var(--blueish);
        --btn-text: var(--whitish);
        --btn-bg: var(--light-blue);
        --tertiary: var(--red);
        --secondary: var(--grey-blue);
        --stroke: var(--blueish);

        /* Define Colors intentions */
        --background: var(--whitish);
        --textColor: var(--paragraph);

        /* font type */
        --headingFont: "Lato", sans-serif;
        --bodyFont: "Poppins", sans-serif;

        /* typography sizes */

        --headingOne: 3.052em;
        --headingTwo: 2.441em;
        --headingThree: 1.953em;
        --headingFour: 1.563em;
        --headingFive: 1.25em;

        --smallTag: 0.8em;

        /* elevations */
        --sh-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);
        --sh-s: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        --sh: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
        --sh-m: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
        --sh-l: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
        --sh-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
        --sh-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.85);
        --sh-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
        --sh-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);
      }

      *::before,
      *::after,
      * {
        box-sizing: inherit;
      }

      html {
        font-size: 100%;
        box-sizing: border-box;
      }

      /*16px*/

      body {
        background: var(--background);
        color: var(--paragraph);
        font-family: var(--bodyFont);
        font-weight: 400;
        line-height: 1.65;
        margin: 0;
        padding: 0;
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

      ul {
        padding: 0;
        list-style: none;
      }
    `}
  />
)

export default GlobalStyles
