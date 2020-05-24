var input = require('fs').readFileSync('./uri/1018/dev/stdin.txt', 'utf8');
var value = parseInt(input);
var notas = []


function condition(value) {
    return value > 100 ? quantify(value, 100) : value > 50 ? quantify(value, 50) : value > 20 ? quantify(value, 20) : value > 5 ? quantify(value, 5) : value > 2 ? quantify(value, 2) : quantify(value, 1)
}

function quantify(value, type) {
    let nota = { quant: undefined, res: undefined, type: type }
    let quant = (value / type)

    nota.res = ((parseInt(quant) * type) - value) * (-1)
    nota.quant = (value - nota.res) / type

    return nota
}

function task(value) {
    var ini = condition(value)
    notas.push(ini)

    for (i = 0; i < 8; i++) {
        notas[i].res > 1 ? (notas.push(condition(notas[i].res))) : i = 8;
    }
}
task(value)

console.log(notas)