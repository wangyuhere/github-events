import gulp from "gulp";
import gutil from "gulp-util";
import sass from "gulp-sass";
import deploy from "gulp-gh-pages";
import browserify from "browserify";
import babelify from "babelify";
import source from "vinyl-source-stream";
import browserSync from "browser-sync";

const libs = [
  "react",
  "react-dom",
  "react-bootstrap",
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
  .pipe(gulp.dest("./public"));
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

gulp.task("build", ["sass", "vendor", "bundle"]);

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

gulp.task("gh-pages", ["build"], () => {
  gulp.src("./public/**/*")
  .pipe(deploy());
});

