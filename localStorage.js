//when page reload, create all table features
//create new variable to save data in locaStorage

//push data to localStorage 
//when form submit, setItem to localStorage



    //    savedData = JSON.parse(localStorage.getItem("userData")) || [];


       //use foreach to get data
    //    const userData = localStorage.getItem('')

 //1. create variable to save data
         //2. loop through data to create DOM features
        //retrieve input values from form and save to vairable
        let userData = {
          firstname: firstName.value,
          lastname: lastName.value,
          month: selectedMonth,
          income: incomes.value,
          expense: expenses.value,
          saving: calculate(incomes.value, expenses.value)
      }

      //get previous saved expenses Data, if none create an empty array
    let savedData = JSON.parse(localStorage.getItem("Expenses Data")) || [];
      //if there are data, create DOM element tables using loop
      for(let i = 0; i < savedData.length; i++){
          //create table row, table data
          let tableRow = document.createElement('tr');
          let tableData = document.createElement('td');
          tableData.innerText = savedData.userData[i].firstName;
          tableData.innerText = savedData.userData[i].lastName;
          tableData.innerText = savedData.userData[i].month;
          tableData.innerText = savedData.userData[i].income;
          tableData.innerText = savedData.userData[i].expense;
          tableData.innerText = savedData.userData[i].saving;
          tableRow.appendChild(tableData);
          tbody.appendChild(tableRow);
      } 


      
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const saving = calculate(incomes.value, expenses.value);
        createTable(firstName.value, lastName.value, selectedMonth, incomes.value, expenses.value, saving); 
     
        //when form submit, save userData in localStorage by pushing userData to savedData array
        savedData.push(
            {firstName: userData.firstname, 
            lastName: userData.lastName,
            month: userData.month,
            income: userData.income,
            expense: userData.expense
        });
        //first  set item, conver to string
        localStorage.setItem("Expenses Data", JSON.stringify(savedData) )

        //clear the input value after submit
        clearInput();
    })




    //   //create userData array
    //   let userData;
    //   //Condition: check if there's something in local Storage, if not set to empty array
    //   if(localStorage.getItem("userData") === null) {
    //       userData = [];
    //   }
    //   //if something, pull and save to userData
    //   else{
    //       //convert to JS datatype when getting item to JS 
    //       userData = JSON.parse(localStorage.getItem("userData"));
    //   }
    //   userData.push(savedData);
    //   //convert savedData back to string to store in localStorage
    //   localStorage.setItem("userData", JSON.stringify(savedData));
  
    //     // //create local Storage func 
    //     // const makeLocalSto = () => {
    //     //     const first = firstName.value;
    //     //     const last = lastName.value;
    //     //     const month = selectedMonth;
    //     //     const income = incomes.value;
    //     //     const expense = expenses.value;
    //     //     // const saving = saving.value;
    //     //     console.log(first);
    //     //     console.log(last);

    //     //     localStorage.setItem(key, value);
    //     //       }
