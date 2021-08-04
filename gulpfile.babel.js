const gulp = require('gulp');
const {src, dest, parallel} = gulp;
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

function exportModules() {
    const tsProject = ts.createProject('tsconfig.json', {
        "emitDeclarationOnly": true
    });
    return src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(babel({
            presets: [['@babel/preset-env', {
                targets: {"esmodules": true}
            }]]
        }))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.esm.js' }))
        .pipe(sourcemaps.write())
        .pipe(dest('dist/esm/'));
}

function exportDefault() {
    const tsProject = ts.createProject('tsconfig.json', {
        "emitDeclarationOnly": true
    });
    return src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(sourcemaps.write())
        .pipe(dest('dist/'));
}

exports.default = parallel(exportDefault, exportModules);