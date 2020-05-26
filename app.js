window.onload = (e) => {
    console.log("fully loaded");
    //select element
    const form = document.querySelector("#form");
    const firstName = document.querySelector('input[name="firstname"]');
    const lastName = document.querySelector('input[name="lastname"]');
    const month = document.querySelector("#month");
    let selectedMonth = month.options[month.selectedIndex].value;
    const incomes = document.querySelector("#income");
    const expenses = document.querySelector("#expense");
    const tbody = document.querySelector('#table tbody');
  

    form.addEventListener("submit", function(e){
        e.preventDefault();
        const saving = calculate(incomes.value, expenses.value);
        createTable(firstName.value, lastName.value, selectedMonth, incomes.value, expenses.value, saving); 
     
        //clear the input value after submit
        clearInput();
    })

    //delete event        
    tbody.addEventListener('click', function(e){    
        const clickedItem = e.target;
        if(clickedItem.className === 'Delete'){
            clickedItem.parentNode.parentNode.remove(e.parentNode);
        }

        console.log(clickedItem.tagName);
    })

    //edit event
    tbody.addEventListener('click', function(e){
        const clickedBtnItem = e.target;
        const firstName = document.querySelector('input[name="firstname"]');
        const firstName_data = firstName.value;
        //const lastName_data = lastName.value;
        //const month_data = month.value;
        //const incomes = incomes.value;
        //const expenses = expenses.value;

        if(clickedBtnItem.className === 'Edit'){
                console.log(firstName_data);
                clickedBtnItem.parentNode.previousElementSibling.innerHTML = "<input type='text' name=" +firstname + " value =" +firstName_data+">";
      

        }
    })

    //clear input function
    const clearInput = () => {
        firstName.value = "";
        lastName.value = "";
        incomes.value = "";
        expense.value = "";  
    }

    //create function to append each value to each cell 
    function appendTd(tr, value){
        const cell = document.createElement('td');
        cell.innerText = value;

        tr.append(cell);
    }


    //create table function dynamically
    const createTable = (first, last, month, income, expense, saving) => {
       
        const cell = document.createElement('tr');

        appendTd(cell, first);
        appendTd(cell, last);
        appendTd(cell, month);
        appendTd(cell, income);
        appendTd(cell, expense);
        appendTd(cell, saving);

    //call addBtn func
        addBtn(cell, 'Edit');
        addBtn(cell, 'Delete');

        tbody.append(cell);
}

//addBtn func
  const addBtn = (cell,text) => {
    
    const td = document.createElement('td');
    const btn = document.createElement('button');
    btn.innerText = text;
    btn.classList.add(text);
    td.appendChild(btn);
    cell.appendChild(td);
    return td;
  }

  //calculate func
  const calculate = (income, expense) => {

        const saving = income - expense;
        return saving;
  }
 
}

// TO DO

//Delete entire tr row when button was clicked
//listen from tbody, target last child of tbody and delete entire line

//Edit button
//localStorage

//check if there's item inside localStorage first,
//If there is loop through and load

//when form submit, add data inside localStorage


