import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  bundle: true,
  format: ['esm', 'cjs'],
  outDir: 'dist',
  noExternal: ['api', 'utils'],
  minify: true,
  esbuildOptions: (options) => {
    options.footer = {
      js: 'module.exports = module.exports.default;',
    }
  }
})
