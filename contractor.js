const Random= require('.Random.js');

const contractor= function(){
let id="c-"+Random().digit(8);
let startDate= Random().digit(4)+"/"+Random().digit(2)+"/"+Random().digit(2);
let endDate= Random().digit(4)+"/"+Random().digit(2)+"/"+Random().digit(2);
function pay(){
    let salary= Random().discreteRangeIn(1,18)*500;
    return salary;
}
return{id, startDate, endDate, pay};
}

module.exports = contractor;
