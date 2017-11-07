const worker= require('./worker.js');
const manager= require('./manager.js');
const divisionHead= require('./divisionHead');
const contractor= require('.contractor');(

const employeeFactory = function(){
  function create(type){
    if(type=="worker"){
      return new worker();
    }
    else if(type=="contractor"){
      return new contractor();
    }
    else if(type=="divisionHead"){
      return new divisionHead();
    }
    else if(type=="manager"){
      return new manager();
    }
  }
};

module.exports = employeeFactory;
