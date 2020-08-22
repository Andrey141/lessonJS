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
    procentDeposit: 0,
    moneyDeposit: 0,
    mission: 150000,
    period: 3,
    asking: function () {

        if (confirm('Есть ли у вас длполнительный зароботок')) {
            let itemIncome = prompt('Какой у вас дополнительный заработок? ', 'Такси');
            while (!isNaN(itemIncome) || (itemIncome === '')) {
                itemIncome = prompt('Какой у вас дополнительный заработок? ', 'Такси');
            }
            let cashIncome = prompt('Каую суммы вы дополнительно зарабатываете? ', 10000);
            while (isNaN(parseFloat(cashIncome)) || (itemIncome === '')) {
                cashIncome = prompt('Каую суммы вы дополнительно зарабатываете? ', 10000);
            }
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Введите обязательные расходы', 'Интернет Такси Коммуналка');
            while (!isNaN(addExpenses) || (addExpenses === '')){
                addExpenses = prompt('Введите обязательные расходы', 'Интернет Такси Коммуналка');
            }

            //console.log(a.charAt(0).toUpperCase() + a.substr(1).toLowerCase());
            
            appData.addExpenses = addExpenses./*toLowerCase().*/split(' ');
           
            console.log(appData.addExpenses);
            console.log(appData.addExpenses.length);

        let f1 = function (){    
            for (let i = 0; i < appData.addExpenses.length; i++){
                appData.addExpenses[i] = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].substr(1).toLowerCase();
            }
            return appData.addExpenses;
        };
        console.log(f1());
        console.log(appData.addExpenses.join(', '));

            appData.deposit = confirm('Есть ли у вас депозит в банке?');


        let sum = 0, qustion, value;

        for (let i = 0; i < 2; i++) {
            ///appData.expenses[prompt('Введиет обязательную статью расходов')] = prompt('Во сколько это обойдется');
            ///while ((isNaN(parseFloat(sum)) || (sum ==='') || (sum === null))) {
            ///    sum = prompt('Во сколько это обойдется');
            qustion = prompt('Введиет обязательную статью расходов');
            value = prompt('Во сколько это обойдется');
            while ((isNaN(parseFloat(value)) || (value ==='') || (value === null))) {
                value = prompt('Во сколько это обойдется');
            };
            appData.expenses[qustion] = value;
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
    
    },
    getInfoDeposit: function (){
        if (appData.deposit){
            appData.procentDeposit = prompt('Какой годовой процент?', 10);
                while (isNaN(parseFloat(appData.procentDeposit)) || (appData.procentDeposit === '')){
                    appData.procentDeposit = prompt('Какой годовой процент?', 10);
                }
            appData.moneyDeposit = prompt('Какая сумма положена?', 10000);
                while(isNaN(parseFloat(appData.moneyDeposit)) || (appData.moneyDeposit === '')){
                    appData.moneyDeposit = prompt('Какая сумма положена?', 10000);
                }
                //console.log(appData.procentDeposit);
                //console.log(appData.moneyDeposit);
        }

    },
    calcSavedMoney: function (){
        return appData.budgetMonth * appData.period;
    }
};
appData.asking();

let expensesAmount = appData.getExpensesMonth();

console.log('Ваши расходы в месяц состовляют: ', expensesAmount);

let accumulatedMonth = appData.getBudget(money, expensesAmount);

let target = Math.ceil(appData.getTargetMonth(appData.mission, accumulatedMonth));

console.log('Цель будет достигнута за: ', target );

appData.getStatusIncome(appData.budgetDay);
console.log(appData.expenses);

function getAppData(){
    console.log('Наша программа включает в себя данные:');
    for (let key in appData){
        console.log('Наша программа включает в себя данные:');
        console.log(key + ' - ' + appData[key]);
    }
};
getAppData();

appData.getInfoDeposit();

/*
let a = 'вАсЯпЕтЯ';
console.log(a);
console.log(a.charAt(0).toUpperCase() + a.substr(1).toLowerCase());
*/
