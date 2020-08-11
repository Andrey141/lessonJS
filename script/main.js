
'use strict';
let money = 235,
    income = 'Фриланс',
    addExpenses = 'Интернет, Такси, Коммуналка',
    deposit = true,
    mission = 19360,
    period = 3,
    budgetDay, 
    money2,
    addExpenses2,
    deposit2,
    expenses1,
    expenses2,
    amount1,
    amount2,
    budgetMonth,
    target;
    
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);
console.log('"Период равен ' + period + ' месяца." ' + 
'Цель заработать ' + mission + ' долларов.');

addExpenses = addExpenses.toLowerCase().split(', ');
console.log(addExpenses);
budgetDay = money / 30;
console.log(budgetDay);
//-------------------------------------------------------------------------
money = Number(prompt('Укажите ваш месячный доход.'));
money2 = Number(prompt('Укажите ваш месячный доход.'));
console.log('Ваш месячный доход1: ' +  money);
console.log('Ваш месячный доход2: ' + money2);

addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую.');
addExpenses2 = prompt('Перечислите возможные расходы за расчитываемый период через запятую.');
console.log('Возможные расходы1: ' + addExpenses);
console.log('Возможные расходы2: ' + addExpenses2);

expenses1 = +prompt('Введите сумму обязательных расходов.');
expenses2 = +prompt('Введите сумму обязательных расходов.');
console.log('Сумма обязательных расходов1: ' + expenses1);
console.log('Сумма обязательных расходов2: ' + expenses2);


deposit = confirm('Есть ли у вас депозит "ОК - ДА", "ОТМЕНА - НЕТ"');
deposit2 = confirm('Есть ли у вас депозит "ОК - ДА", "ОТМЕНА - НЕТ"');
console.log(deposit);
console.log(deposit2);

budgetMonth = (money + money2) - (expenses1 + expenses2);
console.log('Ежемемесячный бюджет с учетом обязательных расходов составляет: ' + budgetMonth);

target = mission / budgetMonth;
console.log(target);

target = Math.round(target);
console.log('Цель будет достигеута за ' + target + ' месяцев (округление в большую сторону)');

budgetDay = budgetMonth / 30;
console.log('Бютжет в день составляет: ' + budgetDay);

if (budgetDay >= 1200) 
    console.log('У вас высокий уровень дохода.');
else if (budgetDay >=600 && budgetDay < 1200 )
        console.log('У вас средний уровень дохода.');
     else if (budgetDay < 600 && budgetDay > 0 ) 
            console.log('У вас низкий уровень дохода');
           else {
               console.log('У вас что то пошло не так.')
           };


