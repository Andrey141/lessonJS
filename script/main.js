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
      buttonStart.disabled = true;
      
const AppData = function(){
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.procentDeposit = 0;
    this.moneyDeposit = 0;
    this.expensesMonth = 0;
};

    AppData.prototype.start = function (){
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
    };
	
    AppData.prototype.showResult = function (){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.floor(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        
        let calkAccumulation = function (){
            const _this = this;
            incomePeriodValue.value = periodSelect.value * _this.budgetMonth;
            console.log(AppData.budgetMonth);
            console.log(_this.budgetMonth);
            console.log(periodSelect.value);
        };
        periodSelect.addEventListener('input', calkAccumulation);
    };
	
    AppData.prototype.addExpensesBlok = function (){
        let cloneExpensesItems = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, btnPlusExpensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items'); //--
        if (expensesItems.length === 3){
            btnPlusExpensesAdd.style.display = 'none';
        }
    };
	
    AppData.prototype.getExpenses = function (){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== ''){
                this.expenses[itemExpenses] = cashExpenses;
            }
        }, this);
    };
	
    AppData.prototype.addIncomeBlok = function (){
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, btnPlusIncomeAdd);
        incomeItems = document.querySelectorAll('.income-items');
        console.log(incomeItems.length);
        if (incomeItems.length === 3){
            btnPlusIncomeAdd.style.display = 'none';
        }
    };
	
    AppData.prototype.getIncome = function (){
        incomeItems.forEach(function(item){
            let incomeTitle = item.querySelector('.income-title').value;
            let incomCost = item.querySelector('.income-amount').value;
            if (incomeTitle !== '' && incomCost !== ''){
                this.income[incomeTitle] = incomCost;
            }; 
        }, this);
    };
	
    AppData.prototype.getAddIncome = function (){
        additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            this.addIncome.push(itemValue);
        }
      }, this);
    };
	
    AppData.prototype.getAddExpenses = function (){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                this.addExpenses.push(item);
            }
        }, this);
    };
	
    AppData.prototype.getExpensesMonth = function() {
        let sum = 0;
        for(let key in this.expenses) {
            sum +=  +this.expenses[key];
        }
        return this.expensesMonth = sum;
    };
	
    AppData.prototype.getBudget = function(){
        let sum = 0;
        let sumAdditionalIncome = 0;
        for (let key in this.expenses){
        sum += +this.expenses[key];
        }

        for (let key in this.income){
        sumAdditionalIncome = sumAdditionalIncome + +this.income[key];
        }



        this.budgetMonth = this.budget + sumAdditionalIncome + this.incomeMonth - sum;  
        this.budgetDay = Math.floor(this.budgetMonth / 30); 
    };
    AppData.prototype.getTargetMonth = function (){
        return targetAmount.value / this.budgetMonth;
    };
	
    AppData.prototype.getStatusIncome = function(/*budgetDay*/){
        this.budgetDay >= 1200? console.log('У вас высокий уровень дохода.') : 
        this.budgetDay >=600 && this.budgetDay < 1200? console.log('У вас средний уровень дохода.'):
        this.budgetDay < 600 && this.budgetDay > 0? console.log('У вас низкий уровень дохода') : console.log('У вас что то пошло не так.');
    };
	
    AppData.prototype.getInfoDeposit = function (){
        if (this.deposit){
            this.procentDeposit = prompt('Какой годовой процент?', 10);
                while (isNaN(parseFloat(this.procentDeposit)) || (this.procentDeposit === '')){
                    this.procentDeposit = prompt('Какой годовой процент?', 10);
                }
                this.moneyDeposit = prompt('Какая сумма положена?', 10000);
                while(isNaN(parseFloat(this.moneyDeposit)) || (this.moneyDeposit === '')){
                    this.moneyDeposit = prompt('Какая сумма положена?', 10000);
                }
        }

    };
	
    AppData.prototype.calcPeriod = function (){
        return this.budgetMonth * periodSelect.value;
    };
	
    AppData.prototype.getRange = function (){
        console.log(periodSelect.value); 
        periodAmount.textContent = periodSelect.value;
    };

    AppData.prototype.reset = function(){
        buttonСancel.style.display = 'none';
        buttonStart.style.display = 'block';
        buttonStart.disabled = true;


		let inputData = data.querySelectorAll('input');
		console.log(inputData); 
		inputData.forEach(function(item){
			item.disabled = false;
			item.value = '';

		});

        this.budgetMonth = '';
        this.budgetDay = '';
        this.expensesMonth = '';
        this.addExpenses = [];
        this.addIncome = [];
        this.income = {};
       periodSelect.value = 1;
       periodAmount.textContent = periodSelect.value;
       console.log(this);
     
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
       this.showResult();
       targetMonthValue.value = '';
    };

    AppData.prototype.eventsListeners = function(){
        let changeRange = function(){
            if (salaryAmount.value !== ''){
                buttonStart.disabled = false;
            } else {
                buttonStart.disabled = true;
            }
        };
        
        buttonStart.addEventListener('click', this.start.bind(this));
        salaryAmount.addEventListener('input', changeRange);
        btnPlusExpensesAdd.addEventListener('click', this.addExpensesBlok);
        btnPlusIncomeAdd.addEventListener('click', this.addIncomeBlok);
        periodSelect.addEventListener('input', this.getRange);
        buttonСancel.addEventListener('click', this.reset.bind(this));

    };

      
const appData = new AppData();
console.log(appData);
appData.eventsListeners();


//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------


let target = Math.ceil(appData.getTargetMonth());

console.log('Цель будет достигнута за: ', target );

appData.getStatusIncome(appData.budgetDay);

	
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
