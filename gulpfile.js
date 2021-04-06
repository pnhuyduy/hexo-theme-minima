const { src, dest, series } = require("gulp");
const del = require("del");
const cleanCss = require("gulp-clean-css");

const config = {
  css: {
    src: "src/css/**/*.css",
    dist: "source/css",
  },
};

function cleanStyles() {
  return del(config.css.dist);
}

function minifyCss() {
  return src(config.css.src).pipe(cleanCss()).pipe(dest(config.css.dist));
}

exports.cssTasks = series(cleanStyles, minifyCss);
