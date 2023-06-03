# Amay Marketing Website 💈

This repository contains the custom code for the Amay Marketing Website. The code is written in TypeScript and bundled with esbuild. It is served through [jsDelivr](https://www.jsdelivr.com/) and included in the custom code sections in Webflow.

The repo was bootstrapped with [Finsweet's developer starter](https://github.com/finsweet/developer-starter).

## Included tools

This template contains some preconfigured development tools:

- [Typescript](https://www.typescriptlang.org/): A superset of Javascript that adds an additional layer of Typings, bringing more security and efficiency to the written code.
- [esbuild](https://esbuild.github.io/): Javascript bundler that compiles, bundles and minifies the original Typescript files.
- [Finsweet's TypeScript Utils](https://github.com/finsweet/ts-utils): Some utilities to help us in our Webflow development.

## Requirements

This template requires the use of [npm](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/). You can [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) with:

```bash
npm install -g npm
```

### Installing

After cloning the repository, open it in your terminal and install the packages by running:

```bash
npm install
```

### Building

To build the files, you have two defined scripts:

- `npm dev`: Builds and creates a local server that serves all files.
- `npm build`: Builds to the production directory (`dist`).

### Serving files on development mode

When you run `npm dev`, two things happen:

- esbuild is set to `watch` mode. Every time that you save your files, the project will be rebuilt.
- A local server is created under `http://localhost:3000` that serves all your project files. You can import them in your Webflow projects like:

```html
<script defer src="http://localhost:3000/{FILE_PATH}.js"></script>
```

- Live Reloading is enabled by default, meaning that every time you save a change in your files, the website you're working on will reload automatically. You can disable it in `/bin/build.js`.

### Building multiple files

If you need to build multiple files into different outputs, you can do it by updating the build settings.

In `bin/build.js`, update the `ENTRY_POINTS` array with any files you'd like to build:

```javascript
const ENTRY_POINTS = [
  "src/home/index.ts",
  "src/contact/whatever.ts",
  "src/hooyah.ts",
  "src/home/other.ts",
];
```

This will tell `esbuild` to build all those files and output them in the `dist` folder for production and in `http://localhost:3000` for development.

### Building CSS files

CSS files are also supported by the bundler. When including a CSS file as an entry point, the compiler will generate a minified version in your output folder.

You can define a CSS entry point by either:

- Manually defining it in the `bin/build.js` config.
- Or importing the file inside any of your JavaScript / TypeScript files:

```typescript
// src/index.ts
import "./index.css";
```

CSS outputs are also available in `localhost` during development mode.

### Setting up a path alias

Path aliases are very helpful to avoid code like:

```typescript
import example from "../../../../utils/example";
```

Instead, we can create path aliases that map to a specific folder, so the code becomes cleaner like:

```typescript
import example from "@utils/example";
```

You can set up path aliases using the `paths` setting in `tsconfig.json`. This template has an already predefined path as an example:

```json
{
  "paths": {
    "@utils/*": ["src/utils/*"]
  }
}
```
