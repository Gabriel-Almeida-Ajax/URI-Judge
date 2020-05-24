var input = require('fs').readFileSync('./uri/1014/dev/stdin.txt', 'utf8');
var lines = input.split('\n');


var km = parseInt(lines.shift());
var l = parseFloat(lines.shift());

var res = (km / l).toFixed(3);

console.log(`${res} km/l`);