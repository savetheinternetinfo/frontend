const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["**/*.jsx", "public/index.html"],
  css: ["src/css/index.css"],
  whitelist: ["bg-blue-dark"],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || [];
        }
      },
      extensions: ["html", "js", "jsx"]
    }
  ]
});

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    }),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
