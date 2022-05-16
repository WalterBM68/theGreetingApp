let theGreetFunction = greetingsFunction();

const theGreetBtn = document.querySelector(".greet");
const theResetBtn = document.querySelector(".reset");
const theText = document.querySelector(".name-text");
const theOutput = document.querySelector(".answer");
const greetings = document.querySelector(".numberOfGreetings");

let storeGreetings = [];

function theName(){
    const radioBtnValue = document.querySelector("input[name='radioBtn']:checked").value;
    theGreetFunction.setName(theText.value.toLowerCase());
    
    if (!theGreetFunction.getName('')) {
        alert("You didn't enter the name!");
        return;
    }
    if (!localStorage.getItem(theGreetFunction.getName())) {
        if (radioBtnValue === "venda") storeGreetings.push(theGreetFunction.language().Tshivenda);
        if (radioBtnValue === "english") storeGreetings.push(theGreetFunction.language().English);
        if (radioBtnValue === "zulu") storeGreetings.push(theGreetFunction.language().IsiZulu);
        if (radioBtnValue === "pedi") storeGreetings.push(theGreetFunction.language().Sepedi);
        if (radioBtnValue === "sotho") storeGreetings.push(theGreetFunction.language().SeSotho);   
        localStorage.setItem('name', storeGreetings); 
    }else{
        alert('You are greeting this person for the second time!!!');
    }
    localStorage.setItem(theGreetFunction.getName(), theGreetFunction.getName());
    greetings.innerHTML = Object.keys(localStorage).length -1;
    const theStorage = localStorage.getItem('name').split(',').join('\n');
    theOutput.innerHTML = theStorage;
}

function reset() {
    storeGreetings = [];
    localStorage.clear();
    greetings.innerHTML = Object.keys(localStorage).length;
    theOutput.innerHTML = "";
    theText.value = '';
}
theGreetBtn.addEventListener("click", theName);
theResetBtn.addEventListener("click", reset);
