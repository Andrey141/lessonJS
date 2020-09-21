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
      expensesTitle = document.querySelector('.expenses-title'),
      expensesItems = document.querySelectorAll('.expenses-items'), 
      additionalExpensesItem = document.querySelector('.additional_expenses-item'),
      targetAmount = document.querySelector('.target-amount'),
      periodSelect = document.querySelector('.period-select'),
      budgetMonthValue = document.querySelector('.budget_month-value'),
      incomeItems = document.querySelectorAll('.income-items'),
      periodAmount = document.querySelector('.period-amount'),
      input = document.querySelectorAll('input'),
      buttonСancel = document.getElementById('cancel'),
	  data = document.querySelector('.data');
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
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();

        this.showResult();
		
        for (let i = 0; i <= 11; i++){
            input[i].disabled = true;
        }
        buttonStart.style.display = 'none';
        buttonСancel.style.display = 'block';
		
		//------------------ДОПОЛНИТЕЛЬНЫЙ ДОХОД------------------
		let income = document.querySelector('.income');
		let inputIncome =  income.querySelectorAll('input');
		inputIncome.forEach(function(item){
			item.disabled = true;
		});
		//------------------ОБЯЗАТЕЛЬНЫЕ РАСХОДЫ------------------
		let expenses = document.querySelector('.expenses');
		let inputExpenses =  expenses.querySelectorAll('input');
		inputExpenses.forEach(function(item){
			item.disabled = true;
		})			
    },
	
    showResult: function (){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.floor(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        
        let calkAccumulation = function (){
            incomePeriodValue.value = periodSelect.value * this.budgetMonth;
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
        additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            this.addIncome.push(itemValue);
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
        for(let key in this.expenses) {
            sum +=  +this.expenses[key];
        }
        return this.expensesMonth = sum;
    },
	
    getBudget: function(){
        let sum = 0;
        let sumAdditionalIncome = 0;
        for (let key in appData.expenses){
        sum += +this.expenses[key];
        }

        for (let key in this.income){
        sumAdditionalIncome = sumAdditionalIncome + +this.income[key];
        }



        this.budgetMonth = this.budget + sumAdditionalIncome + this.incomeMonth - sum;  
        this.budgetDay = Math.floor(appData.budgetMonth / 30); 
    },
    getTargetMonth: function (){
        return targetAmount.value / this.budgetMonth;
    },
	
    getStatusIncome: function(/*budgetDay*/){
        this.budgetDay >= 1200? console.log('У вас высокий уровень дохода.') : 
        this.budgetDay >=600 && this.budgetDay < 1200? console.log('У вас средний уровень дохода.'):
        this.budgetDay < 600 && this.budgetDay > 0? console.log('У вас низкий уровень дохода') : console.log('У вас что то пошло не так.');
    },
	
    getInfoDeposit: function (){
        if (this.deposit){
            this.procentDeposit = prompt('Какой годовой процент?', 10);
                while (isNaN(parseFloat(this.procentDeposit)) || (this.procentDeposit === '')){
                    this.procentDeposit = prompt('Какой годовой процент?', 10);
                }
                this.moneyDeposit = prompt('Какая сумма положена?', 10000);
                while(isNaN(parseFloat(appData.moneyDeposit)) || (this.moneyDeposit === '')){
                    this.moneyDeposit = prompt('Какая сумма положена?', 10000);
                }
        }

    },
	
    calcPeriod: function (){
        return this.budgetMonth * periodSelect.value;
    },
	
    getRange: function (){
        console.log(periodSelect.value); 
        periodAmount.textContent = periodSelect.value;
    },

    reset: function(){
        buttonСancel.style.display = 'none';
        buttonStart.style.display = 'block';
        buttonStart.disabled = true;


		let inputData = data.querySelectorAll('input');
		console.log(inputData); 
		inputData.forEach(function(item){
			item.disabled = false;
			item.value = '';

		});

        appData.budgetMonth = '';
        appData.budgetDay = '';
        this.expensesMonth = '';
        this.addExpenses = [];
        this.addIncome = [];
        appData.income = {};
       periodSelect.value = 1;
       periodAmount.textContent = periodSelect.value;
     
       let removeElement = function (){
           //------------------ДОПОЛНИТЕЛЬНЫЙ ДОХОД------------------
           let incomeFun = document.querySelector('.income');
            incomeItems = document.querySelectorAll('.income-items');
           //------------------ОБЯЗАТЕЛЬНЫЕ РАСХОДЫ------------------
           let expensesFun = document.querySelector('.expenses');
            expensesItems = document.querySelectorAll('.expenses-items');

            while (incomeItems.length > 1){
                incomeFun.removeChild(incomeItems[0]);
                incomeItems = document.querySelectorAll('.income-items');
                btnPlusIncomeAdd.style.display = 'block';
            };

            while (expensesItems.length > 1){
                expensesFun.removeChild(expensesItems[0]);
                expensesItems = document.querySelectorAll('.expenses-items');
                btnPlusExpensesAdd.style.display = 'block';
            };
       }; 
       removeElement();
       appData.showResult();
       targetMonthValue.value = '';
    }
};
//----------------------------------------------------------------------------------------

let changeRange = function(){
    if (salaryAmount.value !== ''){
        buttonStart.disabled = false;
    } else {
        buttonStart.disabled = true;
    }
};
buttonStart.addEventListener('click', appData.start.bind(appData));
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