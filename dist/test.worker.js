console.log('hello from a webworker');
onmessage = function (msg) {
    console.log("webworker receive" + msg);
    postMessage('this is the response ' + msg.data);
};
