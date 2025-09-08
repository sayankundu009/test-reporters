import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  outDir: 'dist',
  noExternal: ['utils'],
  minify: true
})
