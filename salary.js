//? ********* SALARY CALCULATION ********//

const salary = +prompt("Please enter your monthly salary:");

const newSalary =
  salary <= 5500 ? salary * (1.5).toFixed(0) : (salary * 1.1).toFixed(0);
alert(`Your new salary is ${newSalary}₺. Congratulations!`);

//? ********* by muratozkan ********//
