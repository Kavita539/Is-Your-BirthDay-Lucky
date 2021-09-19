const dateOfBirth = document.querySelector("#date-of-birth");;
const luckyNum = document.querySelector("#lucky-num");
const checkNumberButton = document.querySelector("#check-num");
const outputBox = document.querySelector("#output-box");
var crossIcon = document.querySelector(".cross");
var noteDiv = document.querySelector(".note");
var form = document.querySelector("#form");
var luckyDiv = document.querySelector(".lucky");
var unluckyDiv = document.querySelector(".unlucky");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    var dob = dateOfBirth.value;
    dob = dob.replaceAll("-","");
     let sum = 0;
     for(let index=0; index < dob.length; index++){
         sum = sum + Number(dob.charAt(index));
     }
     const luckyNumber = Number(luckyNum.value);
     if(sum % luckyNumber === 0){
        outputBox.innerText="Yay! Your birthday is lucky";
        luckyDiv.style.display="block";
        unluckyDiv.style.display="none";
    }else{
        outputBox.innerText="Oops! Your birthday is not lucky";
        unluckyDiv.style.display="block";
        luckyDiv.style.display="none";
    }
})

crossIcon.addEventListener("click", ()=>{
    noteDiv.style.display="none";
    // console.log("working");
})
