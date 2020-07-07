var input = require('fs').readFileSync('./uri/1013/dev/stdin.txt', 'utf8');
var lines = input.split(' ');




function valores(lines) {
    let res = []
    for (i = 0; i < lines.length; i++) {
        res.push(parseInt(lines[i]))
    }
    return res;
}
var arr = valores(lines);



maior = 0;
for (i = 0; i < lines.length - 1; i++) {

    maior = ((arr[i] + maior + Math.abs(arr[i] - maior)) / 2);
    console.log(maior)


}
console.log(maior)