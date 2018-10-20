import { dome } from "./hello";

console.log("hello typescript + webpack + vscode！");
dome.sayWord("@@@@@@@@@");

import * as workerPath from "file-loader?name=[name].js!./test.worker";
const worker = new Worker(workerPath);
worker.addEventListener('message', message => {
    console.log(message);
});
worker.postMessage('this is a test message to the worker');

