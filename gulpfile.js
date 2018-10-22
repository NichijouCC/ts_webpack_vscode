var gulp = require('gulp');
var typedoc = require("gulp-typedoc");
 
gulp.task("typedoc", function() {
    return gulp
        .src(["src/**/*.ts"])
        .pipe(typedoc({
            exclude:["node_modules",
                    "**/*+(index|.worker|.e2e).ts"],
            // TypeScript options (see typescript docs)
            module: "commonjs",
            target: "es5",
            includeDeclarations: false,
 
            // Output options (see typedoc docs)
            out: "./doc",
 
            // TypeDoc options (see typedoc docs)
            name: "my-project",
            ignoreCompilerErrors: true,
            version: true,
        }))
    ;
});