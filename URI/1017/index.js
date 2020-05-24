var input = require('fs').readFileSync('./uri/1017/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

var time = parseInt(lines.shift());
var velocity = parseInt(lines.shift());
var media = 12;

function calculation(time, velocity, media) {
    let calculo = { kmTotal: undefined, spent: undefined }

    /* --- ESCOPO PRIVADO --- */
    function kmTotal(time, velocity) {
        return (time * velocity).toFixed(3)
    };

    function spent(time, velocity, media) {
        return (kmTotal(time, velocity) / media).toFixed(3)
    };

    /* --- EXPOSIÇÃO DO ESCOPO SPENT - O KMTOTAL CONTINUA ANONIMO AO USUARIO --- */
    calculo.spent = spent(time, velocity, media);


    return calculo
};
/* --- CHAMADO DO ESCOPO --- */
var res = calculation(time, velocity, media)

console.log(res.spent);