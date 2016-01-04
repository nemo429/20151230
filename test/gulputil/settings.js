//Ignore Karma Specs by using ! in front of path
const ignorePath = `!./src/client/app/*/*Spec.js`;

const SETTINGS = {
  src: './src',
  dest: './build',
  srcPath: './src/client',
  destPath: './build',
  jsPaths: [
    `./src/client/app/*.js`,
    `./src/client/app/*.*.js`,
    `./src/client/app/*/*.js`,
    `./src/client/app/*/*.*.js`,
    `./src/client/partials/*.js`,
    `./src/client/partials/*.*.js`,
    ignorePath
  ],
  sassPaths: [
    `./src/client/assets/scss/*.scss`,
    `./src/client/assets/scss/*/*.scss`,
    `./src/client/assets/scss/*/*.*.scss`
  ],
  htmlPaths: [
    `./src/client/app/*/*.html`,
    `./src/client/partials/*.html`,
    `./src/client/*.html`
  ]
};

module.exports.SETTINGS = SETTINGS;
