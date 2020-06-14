function global() {
    let public = {}

    input = parseInt(require('fs').readFileSync('./uri/1020/dev/stdin.txt', 'utf8'));

    function conversao(input) {
        let public = {}

        let years = (input) => parseInt(input / 365);
        let months = (public, input) => parseInt((Math.round(((input / 365) - public.years) * 365)) / 30);
        let days = (public, input) => Math.round((Math.round(((input / 365) - public.years) * 365)) - public.months * 30);


        public.years = years(input);
        public.months = months(public, input)
        public.days = days(public, input)


        return public;
    }

    public.output = (`${conversao(input).years} ano(s)\n${conversao(input).months} mes(es)\n${conversao(input).days} dia(s)`);

    return public;

}

var public = global

console.log(public().output)