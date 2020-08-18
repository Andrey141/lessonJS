'use strict';   
let money,
    start = function (){
        do
            money = prompt('Укажите ваш месячный доход.');
        while (!isNumber(money)){
               //money = prompt('Укажите ваш месячный доход.');
    }
};
let isNumber = function(n) {
return !isNaN(parseFloat(n)) && isFinite(n);
};

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function () {
        let addExpenses = prompt('Интернет, Такси, Коммуналка');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMont: 0,
    getExpensesMonth: function() {
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
    },
    getAccumulatedMonth: function(a, b){
        return a - b;
    },
    getTargetMonth: function (a, b){
        return appData.mission / accumulatedMonth;
    },
    getStatusIncome: function(budgetDay){
        budgetDay >= 1200? console.log('У вас высокий уровень дохода.') : 
        budgetDay >=600 && budgetDay < 1200? console.log('У вас средний уровень дохода.'):
        budgetDay < 600 && budgetDay > 0? console.log('У вас низкий уровень дохода') : console.log('У вас что то пошло не так.');
    
    }
};

appData.asking();

let 
    addExpenses = 'Интернет, Такси, Коммуналка',
    deposit = true;

start();

////function showTypeOf (data){
////    console.log(typeof data);
////}   
////showTypeOf(money);
////showTypeOf(appData.income);
////showTypeOf(appData.deposit);
//-------------------------------------------------------------------------

deposit = confirm('Есть ли у вас депозит "ОК - ДА", "ОТМЕНА - НЕТ"');

////function getStatusIncome(budgetDay){
////    budgetDay >= 1200? console.log('У вас высокий уровень дохода.') : 
////    budgetDay >=600 && budgetDay < 1200? console.log('У вас средний уровень дохода.'):
////    budgetDay < 600 && budgetDay > 0? console.log('У вас низкий уровень дохода') : console.log('У вас что то пошло не так.');
////
////}
//-------------------------------------------------------------------------------

let expenses = [];

////let  getExpensesMonth = function() {
////    let sum = 0;
////
////    for(let i = 0; i < 2; i++) {
////       
////        expenses[i] = prompt('Введиет обязательную статью расходов');
////        sum = prompt('Во сколько это обойдется');
////        while ((isNaN(parseFloat(sum)) || (sum ==='') || (sum === null))) {
////            sum = prompt('Во сколько это обойдется');
////        }
////    }
////    console.log(expenses);
////    return sum;
////};

let expensesAmount = appData.getExpensesMonth();

console.log('Ваши расходы в месяц состовляют: ', expensesAmount);

//Функция возвращает накопления за месяц (доходы минус расходы)
////const getAccumulatedMonth = function(a, b){
////    return a - b;
////};
let accumulatedMonth = appData.getAccumulatedMonth(money, expensesAmount);

//Функция для подсчета за какой период будет достигнута цель
////const getTargetMonth = function (a, b){
////    return appData.mission / accumulatedMonth;
////};
let target = appData.getTargetMonth(appData.mission, accumulatedMonth);
console.log('Цель не будет достигнута за: ', target );

//Функция для подсчета дневного бюджета
const getBudgetDay = function (a){
    return a / 30;
};
let budgetDay = getBudgetDay(accumulatedMonth);
console.log('Ваш доход в день составляет: ', budgetDay);

appData.getStatusIncome(budgetDay);
