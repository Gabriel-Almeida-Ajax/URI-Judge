var input = require('fs').readFileSync('./uri/1019/dev/stdin.txt', 'utf8');
var screen = { hora: 00, min: 00, segun: 00 }



function adcSec(segundos) {
    let seg = parseInt((segundos / 60 - adcMin(segundos)) * 100)
    console.log('s')
    return screen.segun = seg
}

function adcMin(segundos) {
    let min = parseInt(segundos / 60)
        //adcSec(segundos);
    console.log('m')
    return screen.min = min
}

function adcHora(segundos) {
    let horas = parseInt((segundos / 60) / 60)
    let min = adcMin(segundos)
    let seg = adcSec(segundos)
    return { horas, min, seg }
}

input > 3600 ? adcHora(input) : input > 60 ? adcMin() : adcSec(input);

console.log(screen)