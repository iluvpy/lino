import { readFileSync, writeFileSync, existsSync } from "fs";
import { exit } from "process";

const SRC_PATH = "./src/";
const START_FILE = "./";
const BUNDLE_PATH = "./dist/bundle.js";
var bundledJS = "";

function src(fileName) {
    let srcPath = "./src/" + fileName
    if (existsSync(srcPath)) return srcPath;
    console.error(`Couldn't find ${srcPath}`);
    exit();
}


function addToBundle(path) {
    let content = readFileSync(path);
    bundledJS += "\n" + content;
} 

// add files in terms of priority ()
addToBundle(src("constants.js"))
addToBundle(src("util.js"))
addToBundle(src("Color.js"))
addToBundle(src("BoardRenderer.js"))
addToBundle(src("app.js"))

console.log(bundledJS);

writeFileSync(BUNDLE_PATH, bundledJS);