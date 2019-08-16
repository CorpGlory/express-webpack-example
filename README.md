# Express Webpack example
Repo showing how to bundle an [Express.js](https://github.com/expressjs/express)
application to a bundle with [Webpack](https://github.com/webpack/webpack).

**Read more about the project on [https://corpglory.com/s/express-webpack/](https://corpglory.com/s/express-webpack/)**

Project has production and development build.

## Production build
Webpack makes a bundle with all modules inside. You can copy file `dist/app.js`
to any directory and run it with `node app.js`
(without `package.json` and `node_modules`).

## Development build
Makes a bundle without modules from `node_modules`.
Instead, `require('mode_name')` injected. See more details
in [build/webpack.dev.conf.js](build/webpack.dev.conf.js)
