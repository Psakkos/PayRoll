const Random= require('.Random.js');

const worker= function(){
    let id="w-"+Random().digit(8);
    let wage= Random().discreteRangeIn(8,50);
    let hours = Random().discreteRangeIn(4,7)*5;
    function pay(){
        let dailyPay= (hours/5)*wage;
        let weeklyPay= wage;
        let yearlyPay= wage*52;
        let payArray=[dailyPay, yearlyPay, weeklyPay];
        return payArray;
    }
    return {id, wage, hours, pay};
}

module.exports = worker;
