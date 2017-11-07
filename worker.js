const Random= require('.Random.js');

const worker= function(){
let id="w-"+Random().digit(8);
let wage= Random().discreteRangeIn(8,50);
let hours = Random().discreteRangeIn(4,7)*5;
}
