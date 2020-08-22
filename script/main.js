'use strict';   
let money,
    start = function (){
        do
            money = prompt('Укажите ваш месячный доход.', 50000);
        while (isNaN(money));

    
};
start();

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
        }

        return sum;
    },
    getBudget: function(){
        let sum = 0;
        for (let key in appData.expenses){
        sum += +appData.expenses[key];
        }
        appData.budgetMonth = appData.budget - sum;  // исправил расчет
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);  // округлил до целого
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

//let expenses = [];


let expensesAmount = appData.getExpensesMonth();

console.log('Ваши расходы в месяц состовляют: ', expensesAmount);

let accumulatedMonth = appData.getBudget(money, expensesAmount);

let target = Math.ceil(appData.getTargetMonth(appData.mission, accumulatedMonth));
console.log('Цель будет достигнута за: ', target );

appData.getStatusIncome(appData.budgetDay);
console.log(appData.expenses);

function getAppData(){
    console.log('Наша программа включает в себя данные:')
    for (let key in appData){
        console.log(key + '-' + appData[key]);
    }
};

getAppData();