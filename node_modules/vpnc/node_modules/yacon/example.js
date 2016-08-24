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

