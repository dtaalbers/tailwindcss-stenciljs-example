### Tailwind CSS (v3) working with Stencil JS.

A simple project with Tailwind CSS v3 (JIT engine) included.

#### Remaining issues:

##### Refresh classes when running the dev server.

- Clone project
- Run `npm start`
- Change background color from `bg-red-400` to `bg-blue-400`
- As result I would expect the background color to change. But it just changes to a transparent background because it doesn't know the class `bg-blue-400`. Because I have `--watch` running I'd expect the tailwind classes in `www/build/tailwindcss-stenciljs-example.css` to be refreshed based on the current classes in the component and or stylesheets. At the moment for the changes to be visible you have to re-run `npm start`.

##### Also include the classes used in the `src/index.html` and/or other html files in the src folder.

- Clone project
- Run `npm start`
- It seems to ignore the tailwind classes used in `src/index.html`. The component should be centered in the page, which it isn't. Only when a tailwind class is used in the component it gets added to the `www/build/tailwindcss-stenciljs-example.css` stylesheet and when the same class from the component is used in the HTML file you can see the styling being applied. Of course, that is because the tailwind class gets added due to it being used in the component. I'd expect the tailwind classes in al HTML files (provided by `content` in the tailwind config) to be added as well when starting via `npm start` and when making a change in one of the HTML files or components.
