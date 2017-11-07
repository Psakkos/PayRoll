# Employee

In this project we will be using the factory pattern to separate the client from the creation of objects.

## File Structure

You will create many files.  Use the **moduleTemplate** and **SaveAs** to create each of these files.  Also **Ctrl+D** helps you select a word multiple times to replace it quickly.  Hooray for the multi-cursor!!
  -  client.js
  -  employeeFactory.js
  -  worker.js
  -  manager.js
  -  divisionHead.js
  -  contractor.js

## Employee factory

Import all of the 4 types of employee modules using a require statement.

For this file you will make a factory-module, that accepts no inputs, but has one public function in its interface named: createEmployee.

  -  create(): accepts a String variable named type as input.  The function then uses conditional statements to process the input string and return a new Employee.

## Worker

This module keeps track of three variables and has one function.  No input variables are passed to the module, we will generate these with random number functions.

  - id: an 8-digit worker id number. Example w-12345678
  - wage: a random number in between 8 and 50
  - hours: a random number that is either 20, 25, 30, or 35.

  - pay(): returns an array which holds 3 pieces of information: their daily pay, their weekly pay, and their yearly pay (before taxes)

## Manager

This module keeps track of two variables and has one function.  No input variables are passed to the module.
  - id: an 8-digit worker id number. Example m-12345678
  - workers: a random number of works in between 4 and 20.
  - baseSalary: a random number which is either $40k, $50k, ... , $90k

  - pay(): returns the same array as above.  Each manager receives $250 per employee for their first 10 employees, but $400 for each after the tenth.

## Division Head

This module keeps track of three variables and has one function.
  - id: an 8-digit worker id number. Example d-12345678
  - managers: a random number between 1 and 10;
  - workers: a random number between 20 and 300;
  - baseSalary: a random number which is either $100k, $150k, $200k, or $250k.

  - pay():returns the same array as above.  Each Division Head receives an additional $10k for each manager and receives $50 for each worker also times the logarithm of the total number of workers. **use Math.log()**

## Contractor

This module keeps track of three variables and one function.
  - id: an 8-digit worker id number. Example c-12345678
  - startDate: as a string in the format "YYYY/MM/DD".
  - endDate: as a string in the format "YYYY/MM/DD".
  - pay(): does not return an array, just the amount they are paid which is a random number between 500 and 9000.
