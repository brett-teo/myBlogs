// config from https://windicss.org/integrations/webpack.html#next-js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next']
  }
})
