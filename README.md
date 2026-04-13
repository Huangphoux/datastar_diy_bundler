# [Datastar](https://data-star.dev/) DIY Bundler

- Additional files for building and customizing the bundled files.
- Consult the [Minification Measurements](https://delaneyj.github.io/minification_measurements/) page to understand the importance of minification and why you should tailor Datastar to your needs.

## Getting Started

- Clone the [official Datastar repo](https://github.com/starfederation/datastar).
- Put `esbuild.mjs` and `package.json` in the `library` folder.
- Install the latest version of [NodeJS](https://nodejs.org/en) and [pnpm](https://pnpm.io/).
- Run the following commands from within the `/library` directory of the repo
  - Run `pnpm i` to install dependencies.
  - Run `pnpm build` to compile the plugin source code to Javascript
- Check the newly-bundled file in `/bundles/datastar.js`.