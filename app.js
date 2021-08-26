const dateOfBirth = document.querySelector("#date-of-birth");;
const luckyNumber = document.querySelector("#lucky-num");
const checkNumberButton = document.querySelector("#check-num");
const outputBox = document.querySelector("#output-box");
var crossIcon= document.querySelector(".cross");
var noteDiv= document.querySelector(".note");
var luckyDiv= document.querySelector(".lucky");
var unluckyDiv= document.querySelector(".unlucky");


function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText="Yay! Your birthday is lucky";
        luckyDiv.style.display="block";
        unluckyDiv.style.display="none";
    }else{
        outputBox.innerText="Oops! Your birthday is not lucky";
        unluckyDiv.style.display="block";
        luckyDiv.style.display="none";
    }
}

function checkBirthdayIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob)
    compareValues(sum,luckyNumber.value);
    else
    outputBox.innerText="Please enter both the fields";  
}

function calculateSum(dob){
     dob = dob.replaceAll("-","");
     let sum = 0;
     for(let index=0; index < dob.length; index++){
         sum = sum + Number(dob.charAt(index));
     }
     return sum;
}

checkNumberButton.addEventListener('click', checkBirthdayIsLucky);

crossIcon.addEventListener("click", ()=>{
    noteDiv.style.display="none";
    console.log("working");
});
