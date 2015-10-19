import gulp from "gulp";
import gutil from "gulp-util";
import sass from "gulp-sass";
import browserify from "browserify";
import babelify from "babelify";
import source from "vinyl-source-stream";
import browserSync from "browser-sync";

const libs = [
  "history",
  "react",
  "react-dom",
  "react-bootstrap",
  "react-router",
  "superagent",
  "moment",
  "pikaday"
];

var browser = browserSync.create();

gulp.task("bundle", () => {
  var bundle = browserify({
    extensions: [".js", ".jsx"],
    entries: "./src/app.js",
    debug: true
  })

  libs.forEach(lib => {
    bundle.external(lib)
  });

  bundle.transform(babelify)
  .bundle()
  .on("error", gutil.log)
  .pipe(source("bundle.js"))
  .pipe(gulp.dest("./public"))
  .pipe(browser.stream());
});

gulp.task("vendor", () => {
  browserify({
    require: libs,
  })
  .bundle()
  .on("error", gutil.log)
  .pipe(source("vendor.js"))
  .pipe(gulp.dest("./public"));
});

gulp.task("sass", () => {
  gulp.src("./src/styles/main.scss")
  .pipe(sass({includePaths: ["./node_modules"]}).on("error", gutil.log))
  .pipe(gulp.dest("./public"));
});

gulp.task("build", ["sass", "vendor", "bundle"], () => {
  gulp.src("./public/**/*")
  .pipe(gulp.dest("./dist"));
});

gulp.task("serve", ["build"],  () => {
  browser.init({
    server: {
      baseDir: "./public"
    }
  });

  gulp.watch(["src/**/*.scss"], { interval: 500 }, ["sass"]);
  gulp.watch(["src/**/*.js"], { interval: 500 }, ["bundle"]);
  gulp.watch(["node_modules/**/*.js"], { interval: 500 }, ["vendor"]);
  gulp.watch("public/*.html").on("change", browser.reload);
});

