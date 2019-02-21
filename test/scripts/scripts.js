/*'use strict';

var n_date = new Date(),
    formatDate = n_date.getDate(),
    objExpenses = ['Обязательная статья расходов','Расходы в месяц'],
    objOptionalExpenses = ['',''],
    objIncome = ['',''];

if (formatDate <=9) {
    formatDate = "0" + formatDate;
    }
else formatDate = n_date.getDate();

let now = n_date.getFullYear() + "-" + (+n_date.getMonth() + 1 ) + "-" + formatDate,
    money = +prompt("Ваш бюджет на месяц?", "5000"),
    time = prompt("Введите дату в формате YYYY-MM-DD" , now),
    appData = {
    budget: money,
    timeData: now,
    expenses: objExpenses,
    optionalExpenses: objOptionalExpenses,
    income: objIncome,
    savings: false
    };

for(var count = 0; count < 2; count++) {
    objExpenses[0] = prompt("Введите обязательную статью расходов в этом месяце" , "Курсы иностранного языка");
    }

for(var count = 0; count < 2; count++) {
    objExpenses[1] = prompt("Во сколько обойдется?" , "1000");
    }

console.log("appData=");
console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.expenses);
console.log(appData.optionalExpenses);
console.log(appData.income);
console.log(appData.savings);
console.log("objExpenses=");
console.log(objExpenses[0]);
console.log(objExpenses[1]);

let deyBudget = (appData.budget - +appData.expenses[1])/30.0;

alert("Ваш бюджет на 1 день: " + deyBudget.toFixed(2) + " руб.");*/

console.log( 0 || "" || 2 || undefined || true || falsе ); 