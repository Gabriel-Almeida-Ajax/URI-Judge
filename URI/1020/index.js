function global() {
    let public = {}

    input = parseInt(require('fs').readFileSync('./uri/1020/dev/stdin.txt', 'utf8'));

    function conversao(input) {
        let public = {}
        public.years = parseInt(input / 365)
        public.months = parseInt((Math.round(((input / 365) - public.years) * 365)) / 30);
        public.days = Math.round((Math.round(((input / 365) - public.years) * 365)) - public.months * 30);



        return public;
    }

    public.output = console.log(`${conversao(input).years} ano(s)\n${conversao(input).months} mes(es)\n${conversao(input).days} dia(s)`);

    return public;

}

var public = global()