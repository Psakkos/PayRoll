const Random= require('.Random.js');

const divisionHead= function(){
let id="d-"+Random().digit(8);
let managers= Random().discreteRangeIn(1,10);
let workers= Random().discreteRangeIn(20,300);
let baseSalary = Random().discreteRangeIn(2,5)*50000;
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
}
