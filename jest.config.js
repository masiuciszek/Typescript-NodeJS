module.exports = {
  roots: ["<rootDir>"],
  clearMocks: true,
  preset: "jest-playwright-jsdom",
  coverageDirectory: ".coverage",
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  setupFilesAfterEnv: ["<rootDir>/setup-tests.js"],

  testRegex: [
    "(/__tests__/.*(test|spec))\\.([tj]sx?)$",
    "/node_modules/",
    "/.next/",
    "/.vercel/",
    "/cypress/",
  ],
  transform: {
    // "^.+\\.(ts|tsx|js)$": "babel-jest",
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/css-transform.js",
  },

  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/file-mock.js",
    "^@/components(.*)$": "<rootDir>/src/components$1",

    // "@components(.*)$": "<rootDir>/src/components$1",
    // "@styles/(.*)": "<rootDir>/src/styles/$1",
    // "@hooks/(.*)": "<rootDir>/src/hooks/$1",
    // "@utils/(.*)": "<rootDir>/src/utils/$1",
  },
}