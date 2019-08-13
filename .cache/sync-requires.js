const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-floatie-jsx": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/src/pages/floatie.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/src/pages/index.jsx"))),
  "component---src-pages-obo-jsx": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/src/pages/obo.jsx"))),
  "component---src-pages-test-jsx": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/src/pages/test.jsx"))),
  "component---src-pages-web-design-jsx": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/src/pages/webDesign.jsx")))
}

