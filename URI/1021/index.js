var input = require('fs').readFileSync('./uri/1021/dev/stdin.txt', 'utf8');

function global(input) {
    let publico = {}
    const notasMoedas = [100, 50, 20, 10, 5, 2, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01];


    function verify(input) {
        var scree = []
        for (i = 0; i < notasMoedas.length; i++) {
            let v = parseInt(input / notasMoedas[i])
            scree.push(v)
            input = input - (v * notasMoedas[i])
        }
        return scree
    }


    function response(input) {
        let verifyy = verify(input)

        for (i = 0; i < notasMoedas.length; i++) {
            i < 6 ? i != 0 ? console.log(`${verifyy[i]} nota(s) de R$ ${String(notasMoedas[i])}.00`) : (console.log('NOTAS:'), console.log(`${verifyy[i]} nota(s) de R$ ${String(notasMoedas[i])}.00`)) :
                i != 6 ? console.log(`${verifyy[i]} moeda(s) de R$ ${String(notasMoedas[i].toFixed(2))}`) : (console.log('MOEDAS:'), console.log(`${verifyy[i]} moeda(s) de R$ ${String(notasMoedas[i])}.00`));


        }
    }

    publico.response = response





    return publico;

}

var publico = global(input)

publico.response(input)