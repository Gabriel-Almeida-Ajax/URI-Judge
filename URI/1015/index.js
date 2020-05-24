var input = require('fs').readFileSync('./uri/1015/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

function xy(lines) { return lines.shift().split(" ") };

var xy1 = xy(lines);
var xy2 = xy(lines);

function subtrai(xy1, xy2, tipo) {
    return tipo == "x" ? x = parseFloat(xy1[0] - xy2[0]) : y = parseFloat(xy1[1] - xy2[1]);
}

function soma(n1, n2) {
    return n1 + n2
}

function eleva(n, m) {
    return Math.pow(n, m)
}

function raiz(n) {
    return Math.sqrt(n)
}
var res = raiz(soma(eleva(subtrai(xy1, xy2, 'x'), 2), eleva(subtrai(xy1, xy2, 'y'), 2))).toFixed(4);

console.log(res)