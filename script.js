
let number1 = "";
let number2 = "";
let operator ="";
let displayScreen = document.querySelector(".display");
let operatorBtns=document.querySelectorAll("#operator");
let buttons = document.querySelectorAll(".btn");
let resultBtn = document.querySelector(".resultBtn");
let clearBtn = document.querySelector(".clearBtn");
let decimalBtn = document.querySelector(".decimalBtn");
let deleteBtn = document.querySelector(".deleteBtn");
window.addEventListener("keydown",keyboredSupport);
deleteBtn.addEventListener("click",()=>{
    displayScreen.innerHTML=displayScreen.innerHTML.slice(0,-1);
})
decimalBtn.addEventListener("click",(e)=>{
    displayScreen.innerHTML= displayScreen.innerHTML+e.srcElement.innerHTML;

})
clearBtn.addEventListener("click",()=>{
      displayScreen.innerHTML="";
})

resultBtn.addEventListener("click",resultOperation)
operatorBtns.forEach((operatorBtn)=>{
    operatorBtn.addEventListener("click",operatorFun);
})
buttons.forEach((btn)=>{
    btn.addEventListener("click",displayDigits)
})
function resultOperation (){
    number2= Number(displayScreen.innerHTML);
    operate(number1,number2,operator);
}
function operatorFun (e){
    number1= Number(displayScreen.innerHTML);
    operator= e.srcElement.innerHTML;
    displayScreen.innerHTML="";
}
function displayDigits (e){
    displayScreen.innerHTML= displayScreen.innerHTML+e.srcElement.innerText;
}
function operate(num1,num2,operator){
    if(operator === "+"){
        add(num1,num2)
    }
    else if(operator === "-" ){
        subtract(num1,num2)
    }
    else if(operator === "*" ){
        multiply(num1,num2)
    }
    else if(operator === "/" ){
        divide(num1,num2)
    }
}
function add (a,b){
   let result = 0;
   result = a+b;
   displayScreen.innerHTML=result
}
function subtract (a,b){
   let result = 0;
   result = a-b;
   displayScreen.innerHTML=result
}
function multiply (a,b){
   let result = 0;
   result = a*b;
   displayScreen.innerHTML=result
}
function divide (a,b){
   let result = 0;
   result = a/b;
   displayScreen.innerHTML=result
}
function keyboredSupport (e) {
    let key = Number(e.key);
    if(Number.isNaN(key)){
      if(e.key === "+"|| e.key === "-"|| e.key === "/"|| e.key === "*"){
        number1= Number(displayScreen.innerHTML);
        operator= e.key;
        displayScreen.innerHTML=""; 
      }
      else if(e.key === "="){
         resultOperation();
      }
      else if(e.key === "Backspace"){
        displayScreen.innerHTML=displayScreen.innerHTML.slice(0,-1);
      }
      else if(e.key === ".") {
        displayScreen.innerHTML= displayScreen.innerHTML+e.key;
      } 
    }
    else {
        displayScreen.innerHTML= displayScreen.innerHTML+ key;
        
    }
} 
