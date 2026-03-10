document.getElementById('cashout-btn').addEventListener('click', function(){

      //1-get the agent number & validate 
   const cashoutNumber = getValueFromInput('cashout-number');
     if(cashoutNumber.length != 11){
        alert('invalid number');
        return;
     }
   //2- get the ammount
   const cashoutAmmount =getValueFromInput('cashout-amount');
    const currentBalance = getBalance();
   
  


  //4- calculate Balance
  const newBalance =currentBalance- Number(cashoutAmmount);
  console.log(newBalance);
  if(newBalance< 0){
    alert('invaild Ammount');
    return;
  }
  
  const pin = getValueFromInput('cashout-pin');
  if(pin == '1234'){
    alert('Cashout successfull');
     setBalance(newBalance);


       //1- history-container ke shore niye ashbo 
    const history = document.getElementById("history-container");

    //2- new div create korbo
    const newHistory = document.createElement('div');
    //3- new div innerHTML add korbo
    newHistory.innerHTML=`
       <div class="transaction-card p-5 bg-base-100">
         Cashout ${cashoutAmmount} TAKA success to  ${cashoutNumber} ,  at ${new Date ()}    
       </div>
    `;
    //4- history container a newDiv append korbo
    history.append(newHistory);
   
  }

});





























// document.getElementById('cashout-btn').addEventListener("click", function(){


//   //1-get the agent number & validate  
//   const cashoutNumberInput = document.getElementById('cashout-number');
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);
//   if(cashoutNumber.length != 11){
//     alert('Invailid Agent Number');
//      return;
//   }

//   //2-get the ammount
//   const cashoutAmmountInput = document.getElementById('cashout-amount');
//   const cashoutAmmount = cashoutAmmountInput.value;
//   console.log(cashoutAmmount);


//   //3- get the current blance
//   const balanceElement = document.getElementById('blance');
//   const balance = balanceElement.innerText;
//   console.log(balance);


//   //4-calculate new Balance
//   const newBalance = Number(balance)- Number(cashoutAmmount);
//   if(newBalance<0){
//     alert('Invaild Ammount');
//     return ;
//   }
  
//   //5- get the pin and verify
//   const cashoutPinInput = document.getElementById('cashout-pin');
//   const pin = cashoutPinInput.value;
//   if(pin=='1234'){
//     //5-1 true:: show an alert > set Balance
//     alert('cashout sucessful');
//     console.log('new balance', newBalance);
//     balanceElement.innerText = newBalance;
//   }
//   else{
//     //5-2 false:: show an error alert > return 
//     alert('invalid pin');
//     return;
//   }
// })