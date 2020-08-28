'use strict';  

let   buttonStart = document.getElementById('start'),
      btnPlusIncomeAdd = document.getElementsByTagName('button')[0],
      btnPlusExpensesAdd = document.getElementsByTagName('button')[1],
      depositCheckmark = document.querySelector('#deposit-checkmark'),
      additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
      additionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[1],
      additionalIncomeItem2 = document.querySelectorAll('.additional_income-item')[2],
      budgetDayValue = document.querySelector('.budget_day-value'),
      expensesMonthValue = document.querySelector('.expenses_month-value'),
      additionalIncomeValue = document.querySelector('.additional_income-value'),
      additionalExpensesValue = document.querySelector('.additional_expenses-value'),
      incomePeriodValue = document.querySelector('.income_period-value'),
      targetMonthValue = document.querySelector('.target_month-value'),
      salaryAmount = document.querySelector('.salary-amount'),
      incomeTitle = document.querySelector('.income-title'),
      //incomeAmount = document.querySelector('.income-amount'),
      expensesTitle = document.querySelector('.expenses-title'),
      //expensesAmount = document.querySelector('.expenses-amount'),
      expensesItems = document.querySelectorAll('.expenses-items'), //--
      additionalExpensesItem = document.querySelector('.additional_expenses-item'),
      targetAmount = document.querySelector('.target-amount'),
      periodSelect = document.querySelector('.period-select'),
      budgetMonthValue = document.querySelector('.budget_month-value'),
      incomeItems = document.querySelectorAll('.income-items'),
      periodAmount = document.querySelector('.period-amount');

      buttonStart.disabled = true;
      //console.log(budgetMonthValue);
     // console.log(budgetDayValue);()
      //console.log(expensesMonthValue);

    
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
        
     //   if (salaryAmount.value === ''){
     //       alert('Ошибка, поле "Месячный доход" должно быть заполненно!');
     //      return;
     //   }
        appData.budget = +salaryAmount.value;
        //console.log(salaryAmount.value);

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        //appData.getRange();

        appData.showResult();
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
        
/*
// те же действия что и getExpenses
if (confirm('Есть ли у вас дополнительный заработок')) {
    let itemIncome = prompt('Какой у вас дополнительный заработок? ', 'Такси');
    while (!isNaN(itemIncome) || (itemIncome === '')) {
        itemIncome = prompt('Какой у вас дополнительный заработок? ', 'Такси');
    }
    let cashIncome = prompt('Каую суммы вы дополнительно зарабатываете? ', 10000);
    while (isNaN(parseFloat(cashIncome)) || (cashIncome === '')) {
        cashIncome = prompt('Каую суммы вы дополнительно зарабатываете? ', 10000);
        
    }
    appData.income[itemIncome] = cashIncome;
    }
    for (let key in appData.income){
        appData.incomeMonth += +appData.income[key];
    }
    //--------------------------------------------------------------------------------------
    */
},
    getAddIncome: function (){
        additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            appData.addIncome.push(itemValue);
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
    /*
    asking: function () {

        if (confirm('Есть ли у вас дополнительный заработок')) {
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


            appData.addExpenses = addExpenses.split(' ');
           
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

      /*
        for (let i = 0; i < 2; i++) {
            qustion = prompt('Введиет обязательную статью расходов');
            value = prompt('Во сколько это обойдется');
            while ((isNaN(parseFloat(value)) || (value ==='') || (value === null))) {
                value = prompt('Во сколько это обойдется');
            };
            appData.expenses[qustion] = value;
        }
        
    },
    */
    
    getExpensesMonth: function() {
        let sum = 0;
        for(let key in appData.expenses) {
            sum +=  +appData.expenses[key];
        }
       // console.log(sum);
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

        }

    },
    calcPeriod: function (){
        return appData.budgetMonth * periodSelect.value;
    },
    getRange: function (){
        console.log(periodSelect.value);
        periodAmount.textContent = periodSelect.value;

    }
};
//----------------------------------------------------------------------------------------
let f1 = function(){
    if (salaryAmount.value !== ''){
        buttonStart.disabled = false;
        buttonStart.addEventListener('click', appData.start);
    
    } else {
        buttonStart.disabled = true;
    }
};
salaryAmount.addEventListener('blur', f1);
//buttonStart.addEventListener('click', appData.start);
btnPlusExpensesAdd.addEventListener('click', appData.addExpensesBlok);
btnPlusIncomeAdd.addEventListener('click', appData.addIncomeBlok);
periodSelect.addEventListener('change', appData.getRange);

//----------------------------------------------------------------------------------------

//console.log('Ваши расходы в месяц состовляют: ', expensesAmount);

//appData.getBudget();

let target = Math.ceil(appData.getTargetMonth(/*appData.mission, accumulatedMonth*/));

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