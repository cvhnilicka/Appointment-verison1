yacon
=====

This is yet another console logging / debugging module. It has the
following features:

 - `util.format()` formatting.
 - Optional timestamping.
 - Optional call site printing.
 - Optional coloring.
 - Debug output can be enabled in code or via environment variable.

Functions
---------

### enableDebug()

Enables output of `.debug()` calls and adds callsite information to all
lines. Can also be enabled by setting the environment variable `DEBUG` to
anything.

### enableTimestamps()

Enables output of ISO8601 timestamps at the start of every line. Can
also be enabled by setting the environment variable `DEBUG` to
`timestamps`.

### debug(), ok(), info(), warning(), error(), fatal()

Output the arguments in the same way as `util.format()`, preceded by the
specified level keyword. `debug()` will be silent unless debug output
has been enabled. `fatal()` will never return.

Example
-------

```javascript
var con = require('./lib/yacon.js');

function main() {
    con.debug('Debug output: %j', {obj: {foo: 42}});
    con.ok('Good stuff');
    con.info('Informational');
    con.warning('Warning');
    con.error('Error');
    con.fatal('Fatal (program will exit)');
    con.info('We never get here');
}

main();
```

![Example Output](https://raw.github.com/calmh/node-yacon/master/example.png)
 
License
-------

MIT

