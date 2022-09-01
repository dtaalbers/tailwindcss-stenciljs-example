import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';
import autoprefixer from 'autoprefixer';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  globalStyle: 'src/theme/main.scss',
  namespace: 'tailwindcss-stenciljs-example',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  rollupPlugins: {
    after: [nodePolyfills()],
  },
  devServer: {
    openBrowser: false,
    reloadStrategy: 'pageReload',
  },
  plugins: [
    sass(),
    postcss({
      plugins: [
        require('postcss-import'),
        require('tailwindcss')('./tailwind.config.js'),
        autoprefixer(),
        ...(process.env.NODE_ENV === 'production'
          ? [
              require('@fullhuman/postcss-purgecss')({
                content: ['./src/**/*.tsx', './src/**/*.scss', './src/index.html'],
                defaultExtractor: (content: any) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
              }),
              require('cssnano'),
            ]
          : []),
      ],
    }),
  ],
};
