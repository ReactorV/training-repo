module.exports = {
  extends: ["next", "next/core-web-vitals", "eslint:recommended"],
  root: true,
  ignorePatterns: ["node_modules/", ".next/", "dist/"],
  rules: {},
  settings: {},
  // If you want to force build failures on lint errors:
  // The below flag goes in next.config.js (but is deprecated), so this comment is for docs only.
  // To enforce lint errors, use "next lint" separately or set up CI.
};
