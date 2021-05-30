module.exports = {
  modulePathIgnorePatterns: ["<rootDir>/.next"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
};
