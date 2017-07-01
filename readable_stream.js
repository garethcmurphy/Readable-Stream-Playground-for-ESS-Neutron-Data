#!/usr/bin/env node
var fs = require('fs');
var readableStream = fs.createReadStream('file.txt');
var data = '';

readableStream.on('data', function(chunk) {
    data+=chunk;
});

readableStream.on('end', function() {
    console.log(data);
});

for(var i = 0; i < 5; i++) {
 console.log(i);
}
