"use strict";

var stack = require('callsite');
var colors = require('colors');
var path = require('path');
var util = require('util');

var isatty = process.stdout.isTTY;

var timeEnabled = process.env.DEBUG && process.env.DEBUG.match(/timestamp/);
var debugEnabled = !!process.env.DEBUG;

function out(keyword, color, unwind) {
    return function () {
        var str = util.format.apply(null, arguments);

        var prefix = '';
        if (timeEnabled) {
            prefix += (new Date()).toISOString() + ' ';
        }
        prefix += keyword[color].bold + ' - '.grey;
        if (!isatty)
            prefix = prefix.stripColors;

        var suffix = '';
        if (debugEnabled) {
            unwind = unwind || 1;
            var st = stack();
            var file = path.basename(st[unwind].getFileName()) + '#' + st[unwind].getLineNumber();
            var name = st[unwind].getMethodName() || st[unwind].getFunctionName();
            suffix = ' ' + file;
            if (name)
                suffix += '(' + name + ')';
            suffix = suffix.grey;
            if (!isatty)
                suffix = suffix.stripColors;
        }

        console.log(prefix + str + suffix);
    }
}

exports.enableTimestamps = function enableTimestamps() {
    timeEnabled = true;
};

exports.enableDebug = function enableDebug() {
    debugEnabled = true;
};

// Generate a bunch of functions for outputing tagged messages.

var levels = [
    { keyword: 'error',   color: 'red' },
    { keyword: 'warn ', color: 'yellow' },
    { keyword: 'ok   ',      color: 'green' },
    { keyword: 'info ',    color: 'blue' },
    { keyword: 'debug',   color: 'magenta' }
];
levels.forEach(function (def) {
    exports[def.keyword.trim()] = out(def.keyword, def.color);
});

// warn alias as warning

exports['warning'] = exports.warn;

// 'fatal' is a special case since it causes the process to exit.

var fatalOut = out('fatal', 'red', 2);
exports.fatal = function fatal() {
    fatalOut.apply(null, arguments);
    process.exit(-1);
};

// 'debug' is a special case since it needs to check for debugEnabled

var debugOut = out('debug', 'magenta', 2);
exports.debug = function debug(str) {
    if (!debugEnabled)
        return;
    debugOut.apply(null, arguments);
};

