module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  setupFilesAfterEnv: ["<rootDir>/setup-tests.js"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.next/",
    "/.vercel/",
    "/cypress/",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/css-transform.js",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/file-mock.js",
    "@components(.*)$": "<rootDir>/components$1",
    "@styles/(.*)": "<rootDir>/styles/$1",
    "@hooks/(.*)": "<rootDir>/hooks/$1",
    "@context/(.*)": "<rootDir>/context/$1",
    "@utils/(.*)": "<rootDir>/utils/$1",
    "@test/(.*)": "<rootDir>/test/$1",
  },
}
