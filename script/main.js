
 'use strict';
let money = 235,
    income = 'Фриланс',
    addExpenses = 'Интернет, Такси, Коммуналка',
    deposit = true,
    mission = 193600,
    period = 3,
    budgetDay, 
    money2,
    addExpenses2,
    deposit2,
    expenses1,
    expenses2,
    amount1,
    amount2,
    //budgetMonth,
    target,
    result;
    
function showTypeOf(a){
    console.log(typeof(a));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);




//-------------------------------------------------------------------------
money = Number(prompt('Укажите ваш месячный доход.', 10000));
money2 = Number(prompt('Укажите ваш месячный доход.', 10000));

addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую.', 'Такси, коммуналка, путешествие');
addExpenses2 = prompt('Перечислите возможные расходы за расчитываемый период через запятую.', 'Такси, коммуналка, путешествие');

console.log(addExpenses = addExpenses.toLowerCase().split(', '));
console.log(addExpenses2 = addExpenses2.toLowerCase().split(', '));

expenses1 = +prompt('Введите сумму обязательных расходов.');
expenses2 = +prompt('Введите сумму обязательных расходов.');

deposit = confirm('Есть ли у вас депозит "ОК - ДА", "ОТМЕНА - НЕТ"');
deposit2 = confirm('Есть ли у вас депозит "ОК - ДА", "ОТМЕНА - НЕТ"');


function getStatusIncome (budgetDay){
if (budgetDay >= 1200) 
    console.log('У вас высокий уровень дохода.');
else if (budgetDay >=600 && budgetDay < 1200 )
        console.log('У вас средний уровень дохода.');
     else if (budgetDay < 600 && budgetDay > 0 ) 
            console.log('У вас низкий уровень дохода');
           else {
               console.log('У вас что то пошло не так.');
           };
}

//-----------------------------------------------------------------------
// Функция возвращает обязательные расходы за месяц
function getExpensesMonth(a, b) {
    return a + b ; 
}
let expenses = getExpensesMonth(expenses1, expenses2);
console.log('Обязательные расходы за месяц: ', expenses);

// Функуия возвращает накопления за месяц (доходы - расходы)
const getAccumulatedMonth  = function(a, b, c, d) {
    return (a + b) - (c + d);
};
let accumulatedMonth   = getAccumulatedMonth(money, money2, expenses1, expenses2);


// Функция высчитывает за какое время будет достигнута цель 
const getTargetMonth = function(a, b) {
  result = mission / accumulatedMonth;
  result = Math.round(result);
};
getTargetMonth(accumulatedMonth, mission);
console.log('Цель будет достигнута через: ', result);

budgetDay = accumulatedMonth / 30;
console.log('Бютжет в день составляет: ', budgetDay);

getStatusIncome(budgetDay);
