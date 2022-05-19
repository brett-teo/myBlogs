/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: '@mdx-js/react' ?? don't use this prop
  }
})

// config from https://windicss.org/integrations/webpack.html#next-js
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  }
})
