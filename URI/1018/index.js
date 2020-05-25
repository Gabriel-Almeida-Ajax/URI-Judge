var input = require('fs').readFileSync('./uri/1018/dev/stdin.txt', 'utf8');
var value = parseInt(input);
var notas = []


function condition(value) {
    return value > 100 ? quantify(value, 100) : value > 50 ? quantify(value, 50) : value > 20 ? quantify(value, 20) : value > 5 ? quantify(value, 5) : value >= 2 ? quantify(value, 2) : quantify(value, 1)
}

function quantify(value, type) {
    let nota = { type: type, quant: undefined, res: undefined }
    let quant = (value / type)

    nota.res = ((parseInt(quant) * type) - value) * (-1)
    nota.quant = (value - nota.res) / type

    return nota
}

function task(value) {
    var ini = condition(value)
    notas.push(ini)

    for (i = 0; i < 8; i++) {
        notas[i].res > 0 ? (notas.push(condition(notas[i].res))) : i = 8;
    }
}

function nUse() {
    nUtil = [100, 50, 20, 10, 5, 2, 1];
    for (i = 0; i < notas.length; i++) {
        nUtil.splice(nUtil.indexOf(notas[i].type), 1)
    }
    return nUtil
}

task(value)
var zeros = nUse()

function ab(a, b) { return (b.type > a.type) ? 1 : ((a.type > b.type) ? -1 : 0); }

for (let i = 0; i < zeros.length; i++) {
    zeros[i] = { type: zeros[i], quant: 0, res: undefined }

}
let nums = [];
let ok = nums.concat(notas, zeros).sort(ab);
console.log(value)
for (i = 0; i < ok.length; i++) {
    console.log(`${ok[i].quant} nota(s) de R$ ${ok[i].type},00`)
}