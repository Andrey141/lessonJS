'use strict';  

let   buttonStart = document.getElementById('start'),
      btnPlusIncomeAdd = document.getElementsByTagName('button')[0],
      btnPlusExpensesAdd = document.getElementsByTagName('button')[1],
      depositCheckmark = document.querySelector('#deposit-checkmark'),
      additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
      budgetDayValue = document.querySelector('.budget_day-value'),
      expensesMonthValue = document.querySelector('.expenses_month-value'),
      additionalIncomeValue = document.querySelector('.additional_income-value'),
      additionalExpensesValue = document.querySelector('.additional_expenses-value'),
      incomePeriodValue = document.querySelector('.income_period-value'),
      targetMonthValue = document.querySelector('.target_month-value'),
      salaryAmount = document.querySelector('.salary-amount'),
      incomeTitle = document.querySelector('.income-title'),
      expensesTitle = document.querySelector('.expenses-title'),
      expensesItems = document.querySelectorAll('.expenses-items'), 
      additionalExpensesItem = document.querySelector('.additional_expenses-item'),
      targetAmount = document.querySelector('.target-amount'),
      periodSelect = document.querySelector('.period-select'),
      budgetMonthValue = document.querySelector('.budget_month-value'),
      incomeItems = document.querySelectorAll('.income-items'),
      periodAmount = document.querySelector('.period-amount'),
      input = document.querySelectorAll('input'),
      buttonСancel = document.getElementById('cancel');
console.log(input);
      buttonStart.disabled = true;
      
      
let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    procentDeposit: 0,
    moneyDeposit: 0,
    expensesMonth: 0,
    start: function (){
        appData.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();

        this.showResult();

        for (let i = 0; i <= 12; i++){
            input[i].disabled = true;
        }
        buttonStart.style.display = 'none';
        buttonСancel.style.display = 'block';
        
    },
    showResult: function (){
        let a = 0;
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = Math.floor(appData.budgetDay);
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
        
        let calkAccumulation = function (){
            incomePeriodValue.value = periodSelect.value * appData.budgetMonth;
        };
        periodSelect.addEventListener('input', calkAccumulation);
    },
    addExpensesBlok: function (){
        let cloneExpensesItems = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, btnPlusExpensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items'); //--
        if (expensesItems.length === 3){
            btnPlusExpensesAdd.style.display = 'none';
        }
    },
    getExpenses: function (){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    addIncomeBlok: function (){
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, btnPlusIncomeAdd);
        incomeItems = document.querySelectorAll('.income-items');
        console.log(incomeItems.length);
        if (incomeItems.length === 3){
            btnPlusIncomeAdd.style.display = 'none';
        }
    },
    getIncome: function (){
        incomeItems.forEach(function(item){
            let incomeTitle = item.querySelector('.income-title').value;
            let incomCost = item.querySelector('.income-amount').value;
            if (incomeTitle !== '' && incomCost !== ''){
                appData.income[incomeTitle] = incomCost;
            }; 
        });
    },
    getAddIncome: function (){
        //let addIncome = additionalIncomeItem.value.split(',');
        additionalIncomeItem.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addIncome.push(item);
        }
      });
    },
    getAddExpenses: function (){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getExpensesMonth: function() {
        let sum = 0;
        for(let key in appData.expenses) {
            sum +=  +appData.expenses[key];
        }
        return appData.expensesMonth = sum;
    },
    getBudget: function(){
        let sum = 0;
        for (let key in appData.expenses){
        sum += +appData.expenses[key];
        }
        appData.budgetMonth = appData.budget + appData.incomeMonth - sum;  
        appData.budgetDay = Math.floor(appData.budgetMonth / 30); 
    },
    getTargetMonth: function (){
        return targetAmount.value / appData.budgetMonth;
    },
    getStatusIncome: function(/*budgetDay*/){
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
        }

    },
    calcPeriod: function (){
        return appData.budgetMonth * periodSelect.value;
    },
    getRange: function (){
        console.log(periodSelect.value);  ///---
        periodAmount.textContent = periodSelect.value;

    },

    reset: function(){
        buttonСancel.style.display = 'none';
        buttonStart.style.display = 'block';

        for (let i = 0; i <= 12; i++){
            input[i].disabled = false;
            input[i].value = '';
        }

       appData.budgetMonth = 0;
       appData.budgetDay = '';
       appData.expensesMonth = '';
       appData.addExpenses.push(' ');
       appData.addIncome.push(' ');
       //appData.getTargetMonth = '';

       appData.showResult();
    }
};
//----------------------------------------------------------------------------------------

let changeRange = function(){
    if (salaryAmount.value !== ''){
        buttonStart.disabled = false;
        buttonStart.addEventListener('click', appData.start.bind(appData));

    } else {
        buttonStart.disabled = true;
    }
};
salaryAmount.addEventListener('input', changeRange);
btnPlusExpensesAdd.addEventListener('click', appData.addExpensesBlok);
btnPlusIncomeAdd.addEventListener('click', appData.addIncomeBlok);
periodSelect.addEventListener('input', appData.getRange);
buttonСancel.addEventListener('click', appData.reset);
//----------------------------------------------------------------------------------------


let target = Math.ceil(appData.getTargetMonth());

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
//----------------------------------------------------------------------------