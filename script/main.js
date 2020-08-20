'use strict';   
let money,
    start = function (){
        do
            money = prompt('Укажите ваш месячный доход.', 50000);
        while (isNaN(money));

    
};
start();
////let isNumber = function(n) {
/////return !isNaN(parseFloat(n)) && isFinite(n);
////};

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 150000,
    period: 3,
    asking: function () {
        let addExpenses = prompt('Введите обязательные расходы', 'Интернет, Такси, Коммуналка');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');

        let sum = 0;
        for (let i = 0; i < 2; i++) {
            appData.expenses[prompt('Введиет обязательную статью расходов')] = prompt('Во сколько это обойдется');
            while ((isNaN(parseFloat(sum)) || (sum ==='') || (sum === null))) {
                sum = prompt('Во сколько это обойдется');
            }
        }
        
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMont: 0,
    getExpensesMonth: function() {
        let sum = 0;
        for(let key in appData.expenses) {
            sum +=  +appData.expenses[key];
            

           //// expenses[i] = prompt('Введиет обязательную статью расходов');
           //// sum = prompt('Во сколько это обойдется');
           //// while ((isNaN(parseFloat(sum)) || (sum ==='') || (sum === null))) {
           ////     sum = prompt('Во сколько это обойдется');
           //// }
           
        }
        //console.log(expenses);
        return sum;
    },
    getBudget: function(){
        let sum = 0;
        for (let key in appData.expenses){
        sum += +appData.expenses[key];
        }
        console.log(sum);
        appData.budgetMonth = appData.mission - sum;
        appData.budgetDay = appData.budgetMonth / 30;

        console.log('бюджет в месяц составляет', appData.budgetMonth);
        console.log('бюджет в день составляет', appData.budgetDay);
        
        
    },
    getTargetMonth: function (){
        return appData.mission / appData.budgetMonth;
    },
    getStatusIncome: function(budgetDay){
        appData.budgetDay >= 1200? console.log('У вас высокий уровень дохода.') : 
        appData.budgetDay >=600 && appData.budgetDay < 1200? console.log('У вас средний уровень дохода.'):
        appData.budgetDay < 600 && appData.budgetDay > 0? console.log('У вас низкий уровень дохода') : console.log('У вас что то пошло не так.');
    
    }
};
appData.asking();



////let 
////    addExpenses = 'Интернет, Такси, Коммуналка',
////    deposit = true;



////function showTypeOf (data){
////    console.log(typeof data);
////}   
////showTypeOf(money);
////showTypeOf(appData.income);
////showTypeOf(appData.deposit);
//-------------------------------------------------------------------------

////deposit = confirm('Есть ли у вас депозит "ОК - ДА", "ОТМЕНА - НЕТ"');

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
let accumulatedMonth = appData.getBudget(money, expensesAmount);

//Функция для подсчета за какой период будет достигнута цель
////const getTargetMonth = function (a, b){
////    return appData.mission / accumulatedMonth;
////};
let target = Math.ceil(appData.getTargetMonth(appData.mission, accumulatedMonth));
console.log('Цель не будет достигнута за: ', target );

//Функция для подсчета дневного бюджета
////const getBudgetDay = function (a){
////    return a / 30;
////};
////let budgetDay = getBudgetDay(accumulatedMonth);

appData.getStatusIncome(appData.budgetDay);
console.log(appData.expenses);
