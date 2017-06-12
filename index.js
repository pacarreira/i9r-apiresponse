'use strict';

//Add npm modules
var fs = require('fs');
var path = require('path');

//api responses
var response={
    send:function(res, code, data){
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = code;
        res.end(JSON.stringify(data));
    },
    sendFile:function(res,location){
        res.writeHead(200, {
            "Content-Type": "application/octet-stream",
            "Content-Disposition": "attachment; filename=" + path.basename(location)
        });
        fs.createReadStream(location).pipe(res);
    }
}

exports.send=response.send;

exports.sendFile=response.sendFile;

module.exports = response;
