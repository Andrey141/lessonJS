
'use strict';
let money = 235,
    income = 'Фриланс',
    addExpenses = 'Интернет, Такси, Коммуналка',
    mission = 19360,
    period = 3,
    deposit = true,
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
let budgetDay = money / 30;
console.log(budgetDay);
//-------------------------------------------------------------------------
money = Number(prompt('Укажите ваш месячный доход.'));
console.log('Ваш месячный доход: ',  money);

addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую.');
console.log('Возможные расходы: ' + addExpenses);

deposit = confirm('Есть ли у вас депозит "ОК - ДА", "ОТМЕНА - НЕТ"');
console.log(deposit);

let expenses1 = prompt('Введите обязательную статью расходов1.'),
    amount1 = Number(prompt('Во сколько это обойдется')),
    expenses2 = prompt('Введите обязательную статью расходов2.'),
    amount2 = Number(prompt('Во сколько это обойдется'));
console.log('Сумма обязательных расходов на: ' + expenses1 + 'составляет: ', amount1);
console.log('Сумма обязательных расходов на: ' + expenses2 + 'составляет: ', amount2);

budgetMonth = money - (amount1 + amount2);
console.log('Ежемесячный бюджет с учетом обязательных расходов составляет: ', budgetMonth);

target = mission / budgetMonth;
console.log('Цель будет достигнута за: ', target);
target = Math.ceil(target);
console.log('Цель будет достигнута за ', target, 'месяцев (округление в большую сторону)');

budgetDay = budgetMonth / 30;
console.log('Бюджет в день составляет: ', budgetDay);
budgetDay = Math.floor(budgetDay);
console.log('Бюджет в день составляет: ', budgetDay, ' (округление в меньшую сторону)');

if (budgetDay >= 1200) 
    console.log('У вас высокий уровень дохода.');
else if (budgetDay >=600 && budgetDay < 1200 )
        console.log('У вас средний уровень дохода.');
     else if (budgetDay < 600 && budgetDay > 0 ) 
            console.log('У вас низкий уровень дохода');
           else {
               console.log('У вас что то пошло не так.')
           };


