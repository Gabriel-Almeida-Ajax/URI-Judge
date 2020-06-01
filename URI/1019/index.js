var input = require('fs').readFileSync('./uri/1019/dev/stdin.txt', 'utf8');

var screen = adcHora(input)

function adcHora(segundos, screen) {
    let hora = parseInt(segundos / 60 / 60)
    let min = parseInt((segundos - (hora * 60 * 60)) / 60)
    let seg = segundos - (min * 60 + (hora * 60 * 60))
    return { hora, min, seg };
}

console.log(`${screen.hora}:${screen.min}:${screen.seg}`)