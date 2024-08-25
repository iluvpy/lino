import { readFileSync, writeFileSync, existsSync } from "fs";
import { exit } from "process";
import { exec } from "child_process";

const SRC_PATH = "./src/";
const OUTFILE = "bundle.js";
const OUTDIR = "./dist/";
const BUNDLE_PATH = `${OUTDIR}${OUTFILE}`;
const PRODUCTION = false;
var bundledJSContent = "";

function src(fileName) {
    let srcPath = SRC_PATH + fileName
    if (existsSync(srcPath)) return srcPath;
    console.error(`Couldn't find ${srcPath}`);
    exit();
}

function getFileName(path) {
    let list = path.split("/");
    let len = list.length;
    return list[len-1];
} 

function addToBundle(path) {
    let content = readFileSync(path);
    let fileName = getFileName(path);
    console.log(`adding ${fileName}...`);
    bundledJSContent += `\n//-----------${fileName}-----------\n` + content;
} 

// add files in terms of priority ()
addToBundle(src("constants.js"));
addToBundle(src("util.js"));
addToBundle(src("Color.js"));
addToBundle(src("Piece.js"));
addToBundle(src("BoardRenderer.js"));
addToBundle(src("BoardState.js"));
addToBundle(src("BoardHandler.js"));
addToBundle(src("app.js"));

writeFileSync(BUNDLE_PATH, bundledJSContent);

console.log("minifiyng..");
exec(`npx uglify-js ${BUNDLE_PATH} -c -o ${OUTDIR}/bundle.min.js`, (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        console.log("error occured trying to run uglify js: ");
        console.log(err);
        return;
    }    
});