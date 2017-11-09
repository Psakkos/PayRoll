const Random= require('.Random.js');

const divisionHead= function(){
let id="d-"+Random().digit(8);
let managers= Random().discreteRangeIn(1,10);
let workers= Random().discreteRangeIn(20,300);
let baseSalary = Random().discreteRangeIn(2,5)*50000;
function pay(){
    let yearlyPay= baseSalary;
    yearlyPay+= 10000*managers + ((50*w)/(Math.log(50*w)));
    let weeklyPay= yearlyPay/52;
    let dailyPay= weeklyPay/5;
    let payArray = [dailyPay, yearlyPay, weeklyPay];
    return payArray;
}
return{id, managers, pay, workers};
}

module.exports = divisionHead;
