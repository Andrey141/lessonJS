
 'use strict';
let money = 235,
    income = 'Фриланс',
    addExpenses = 'Интернет, Такси, Коммуналка',
    mission = 193600,
    period = 3,
    deposit = true;
   

function showTypeOf (data){
    console.log(typeof data);
}   
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
//-------------------------------------------------------------------------

money = Number(prompt('Укажите ваш месячный доход.'));

addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую.');

deposit = confirm('Есть ли у вас депозит "ОК - ДА", "ОТМЕНА - НЕТ"');

let amount1 = Number(prompt('Во сколько это обойдется')),
    amount2 = Number(prompt('Во сколько это обойдется'));

function getStatusIncome(budgetDay){
/*if (budgetDay >= 1200) 
    console.log('У вас высокий уровень дохода.');
else if (budgetDay >=600 && budgetDay < 1200 )
        console.log('У вас средний уровень дохода.');
     else if (budgetDay < 600 && budgetDay > 0 ) 
            console.log('У вас низкий уровень дохода');
           else {
               console.liog('У вас что то пошло не так.')
           };*/
    budgetDay >= 1200? console.log('У вас высокий уровень дохода.') : 
    budgetDay >=600 && budgetDay < 1200? console.log('У вас средний уровень дохода.'):
    budgetDay < 600 && budgetDay > 0? console.log('У вас низкий уровень дохода') : console.log('У вас что то пошло не так.');

}
//-------------------------------------------------------------------------------
//Функция возвращает сумму всех обязательных расходов за месяц 
let  amount;
function getExpensesMonth(a,b) {
    return a+b;
}
console.log('Ваши расходы в месяц состовляют: ', amount = getExpensesMonth(amount1, amount2));

addExpenses = addExpenses.toLowerCase().split(', ');
console.log(addExpenses);

//Функция возвращает накопления за месяц (доходы минус расходы)
const getAccumulatedMonth = function(a, b){
    return a - b;
};
let accumulatedMonth = getAccumulatedMonth(money, amount);

//Функция для подсчета за какой период будет достигнута цель
const getTargetMonth = function (a, b){
    return mission / accumulatedMonth;
};
let target = getTargetMonth(mission, accumulatedMonth);
console.log('Вы достигните своей цели через: ', target, 'месяцев');

//Функция для подсчета дневного бюджета
const f1 = function (a){
    return a / 30;
};
let budgetDay = f1(accumulatedMonth);
console.log('Ваш доход в день составляет: ', budgetDay);

getStatusIncome(budgetDay);
