"use strict";

console.log('main.js is connected');

// REQUIRES
let googleUser = require('./user'),
    config = require("./config"),
    objects = require('./objectBuilder'),
    render = require('./DOMbuilder'),
    caseFile = require('./caseInfo'),
    plans = require('./responseType'),
    profile = require('./profile'),
    form = require('./formInteractions'),
    adminView = require('./adminView'),
    $ = require('jquery');

$(document).on('click', '.navbar-brand', function(){render.renderHomeMain();});