let isNumber = function(n) {
return !isNaN(parseFloat(n)) && isFinite(n);
};



 'use strict';
let money = 235,
    income = 'Фриланс',
    addExpenses = 'Интернет, Такси, Коммуналка',
    mission = 193600,
    period = 3,
    deposit = true;
   
let start = function (){
    do
        money = prompt('Укажите ваш месячный доход.');
    while (!isNumber(money)){
        //money = prompt('Укажите ваш месячный доход.');
    }
};

start();

function showTypeOf (data){
    console.log(typeof data);
}   
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
//-------------------------------------------------------------------------

//money = Number(prompt('Укажите ваш месячный доход.'));

addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую.');
addExpenses = addExpenses.toLowerCase().split(', ');
console.log(addExpenses);

deposit = confirm('Есть ли у вас депозит "ОК - ДА", "ОТМЕНА - НЕТ"');

//let expenses1 = prompt('Введиет обязательную статью расходов');
//    amount1 = Number(prompt('Во сколько это обойдется'));
//    expenses2 = prompt('Введиет обязательную статью расходов');
//    amount2 = Number(prompt('Во сколько это обойдется'));

function getStatusIncome(budgetDay){
    budgetDay >= 1200? console.log('У вас высокий уровень дохода.') : 
    budgetDay >=600 && budgetDay < 1200? console.log('У вас средний уровень дохода.'):
    budgetDay < 600 && budgetDay > 0? console.log('У вас низкий уровень дохода') : console.log('У вас что то пошло не так.');

}
//-------------------------------------------------------------------------------
//Функция возвращает сумму всех обязательных расходов за месяц 
////let  amount;*/
let expenses = [];

let  getExpensesMonth = function() {
    let sum = 0;

    for(let i = 0; i < 2; i++) {
       
        expenses[i] = prompt('Введиет обязательную статью расходов');
        sum = prompt('Во сколько это обойдется');
        while ((isNaN(parseFloat(sum)) || (sum ==='') || (sum === null))) {
            sum = prompt('Во сколько это обойдется');
        }
    }
    console.log(expenses);
    return sum;
};


let expensesAmount = getExpensesMonth();

console.log('Ваши расходы в месяц состовляют: ', expensesAmount);



//Функция возвращает накопления за месяц (доходы минус расходы)
const getAccumulatedMonth = function(a, b){
    return a - b;
};
let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

//Функция для подсчета за какой период будет достигнута цель
const getTargetMonth = function (a, b){
    return mission / accumulatedMonth;
};
let target = getTargetMonth(mission, accumulatedMonth);
console.log('Вы достигните своей цели через: ', target, 'месяцев');

//Функция для подсчета дневного бюджета
const getBudgetDay = function (a){
    return a / 30;
};
let budgetDay = getBudgetDay(accumulatedMonth);
console.log('Ваш доход в день составляет: ', budgetDay);

getStatusIncome(budgetDay);
