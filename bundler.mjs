import { readFileSync, writeFileSync } from "fs";

const SRC_PATH = "./src/";
const START_FILE = "./";
const BUNDLE_PATH = "./dist/bundle.js";
var bundledJS = "";

function src(fileName) {
    return "./src/" + fileName;
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
addToBundle(src("index.js"))

console.log(bundledJS);

writeFileSync(BUNDLE_PATH, bundledJS);