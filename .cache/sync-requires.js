const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-bond-jsx": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/src/pages/bond.jsx"))),
  "component---src-pages-comotion-jsx": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/src/pages/comotion.jsx"))),
  "component---src-pages-floatie-jsx": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/src/pages/floatie.jsx"))),
  "component---src-pages-google-jsx": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/src/pages/google.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/src/pages/index.jsx"))),
  "component---src-pages-new-landing-jsx": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/src/pages/newLanding.jsx"))),
  "component---src-pages-obo-jsx": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/src/pages/obo.jsx"))),
  "component---src-pages-startup-jsx": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/src/pages/startup.jsx"))),
  "component---src-pages-test-jsx": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/src/pages/test.jsx"))),
  "component---src-pages-web-design-jsx": hot(preferDefault(require("/Users/ericflatt/gatsby-portfolio/src/pages/webDesign.jsx")))
}

