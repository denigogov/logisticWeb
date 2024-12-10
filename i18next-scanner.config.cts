module.exports = {
  input: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.spec.{ts,tsx}",
    "!translate/src",
    "!**/node_modules/**",
  ],

  output: "./",
  options: {
    compatibilityJSON: "v3",
    debug: true,
    func: {
      list: ["i18next.t", "i18n.t", "t"],
      extensions: [".ts", ".tsx"],
    },
    trans: {
      extensions: [".ts", ".tsx"],
    },
    lngs: ["en", "de"],
    ns: ["translation"],
    defaultLng: "de",
    defaultNs: "translation",
    resource: {
      loadPath: "src/translate/{{lng}}/{{ns}}.json",
      savePath: "src/translate/{{lng}}/{{ns}}.json",
    },
  },
};
