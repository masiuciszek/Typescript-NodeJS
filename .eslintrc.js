module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {ecmaVersion: 8},
  ignorePatterns: ["node_modules/*", ".next/*", ".out/*", "!.prettierrc.js"], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ["react-app", "react-app/jest"],
  plugins: ["jsx-a11y", "@asbjorn/groq"],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/no-unescaped-entities": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off", // We will use TypeScript's types for component props instead
    "jsx-a11y/anchor-is-valid": "off", // This rule is not compatible with Next.js's <Link /> components
  },
  parser: "@typescript-eslint/parser",
  settings: {react: {version: "detect"}},
}
