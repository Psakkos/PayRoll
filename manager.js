const Random= require('.Random.js');

const manager= function(){
let id="m-"+Random().digit(8);
let workers= Random().discreteRangeIn(4,20);
let baseSalary = Random().discreteRangeIn(4,9)*10000;
function pay(){
    let yearlyPay= baseSalary;
    if(workers<=10){
        yearlyPay+= 250*workers;
    }
    else{
        yearlyPay+= 2500 +400*(workers-10);
    }
    let weeklyPay= yearlyPay/52;
    let dailyPay= weeklyPay/5;
    let payArray = [dailyPay, yearlyPay, weeklyPay];
    return payArray;
}
return {id, workers, pay};
}

module.exports = manager;
