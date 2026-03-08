console.log('login functional');
document.getElementById ('login-btn').addEventListener('click',function(){
   
    //1-get the mobile number input
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    //2-get the pin input
    const inputpin= document.getElementById('input-pin');
    const pin= inputpin.value;
    console.log(pin);
    //3- match pin & mobile number
    if( contactNumber=='01947619298' && pin=='1234'){
        //3-1 true::>> alert> homepage
       alert ("login Successful");
    //    window.location.replace("/home.html");
    //ekhane replace use korle ager page e back kora jabe nah but assign use korle ager page e back kora jabe 
         window.location.assign("/home.html") 
    }
    else{
        //3-2 false::>> alert> homepage 
        alert("login Failed");
        return;
    }

   
});