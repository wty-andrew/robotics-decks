const projectName = require('./package.json').name

module.exports = {
  pathPrefix: `/${projectName}`,
  plugins: ['gatsby-plugin-eslint', 'gatsby-theme-mdx-deck'],
}
