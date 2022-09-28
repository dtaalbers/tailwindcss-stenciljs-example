import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import tailwind, { tailwindGlobal, tailwindHMR } from 'stencil-tailwind-plugin';
import cfg from './tailwind.config';

export const config: Config = {
  //   globalStyle: 'src/theme/main.scss',
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
    tailwindGlobal({
      tailwindCssPath: './src/theme/main.scss',
      tailwindConf: cfg,
    }),
    tailwind({
      tailwindCssPath: './src/theme/main.scss',
      tailwindConf: cfg,
    }),
    tailwindHMR(),
  ],
};
