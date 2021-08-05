/*
 * Copyright (c) 2020 LG Electronics Inc.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

// helloworld_webos_service.js
// is simple service, based on low-level luna-bus API

// eslint-disable-next-line import/no-unresolved
const pkgInfo = require('./package.json');
const Service = require('webos-service');

const service = new Service(pkgInfo.name); // Create service by service name on package.json
const logHeader = "[" + pkgInfo.name + "]";
let greeting = "Hello, World!";

var fs = require('fs');

var ROOT = '/home/root/';

// readfile
service.register("readFile", function(message){
    var path = ROOT + message.payload.path;

    fs.readFile(path, 'utf8', function(err, data){
        if (err){
            message.respond({
                returnValue: false, 
                errorCode: 'readfile error', 
                errorText: err
            });
        }
        else {
            message.respond({
                returnValue: true, 
                fileData: data
            });
        }
    });
});

service.register("readImgFile", function(message){
    var path = ROOT + message.payload.path;
    fs.readFile(path, function(err, data){
        if (err){
            message.respond({
                returnValue: false, 
                errorCode: 'readfile error', 
                errorText: err
            });
        }
        else {
            message.respond({
                returnValue: true, 
                fileData: data.toString('base64')
            });
        }
    });
});
