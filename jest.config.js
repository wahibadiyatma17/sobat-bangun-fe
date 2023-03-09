module.exports = {
  setupFilesAfterEnv: ["./jest.setup.ts"],
  injectGlobals: true,
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@common(.*)$": "<rootDir>/common$1",
    "^@constants(.*)$": "<rootDir>/constants$1",
    "^@tests(.*)$": "<rootDir>/tests$1",
    "\\.(css|jpg|png)$": "<rootDir>/components/styleMock.js",
  },
};
