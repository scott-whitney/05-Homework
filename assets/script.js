




var mondayValue = document.querySelector("#inputValueMonday");
var tuesdayValue = document.querySelector("#inputValueTuesday");
var wednesdayValue = document.querySelector("#inputValueWednesday");
var thursdayValue = document.querySelector("#inputValueThursday");
var fridayValue = document.querySelector("#inputValueFriday");
var saturdayValue = document.querySelector("#inputValueSaturday");
var sundayValue = document.querySelector("#inputValueSunday");

var $mondayButton = document.querySelector('#mondayBtn');
var $tuesdayButton = document.querySelector('#tuesdayBtn');
var $wednesdayButton = document.querySelector('#wednesdayBtn');
var $thursdayButton = document.querySelector('#thursdayBtn');
var $fridayButton = document.querySelector('#fridayBtn');
var $saturdayButton = document.querySelector('#saturdayBtn');
var $sundayButton = document.querySelector('#sundayBtn');

var toDoListMonday = localStorage.getItem('Monday');
var toDoListTuesday = localStorage.getItem("Tuesday");
var toDoListWednesday = localStorage.getItem("Wednesday");
var toDoListThursday = localStorage.getItem("Thursday");
var toDoListFriday = localStorage.getItem("Friday");
var toDoListSaturday = localStorage.getItem("Saturday");
var toDoListSunday = localStorage.getItem("Sunday");


if(toDoListMonday){
    mondayValue.setAttribute('placeholder', toDoListMonday);
}

if(toDoListTuesday) {
    tuesdayValue.setAttribute('placeholder', toDoListTuesday);
}

if(toDoListWednesday) {
    wednesdayValue.setAttribute('placeholder', toDoListWednesday);
}

if(toDoListThursday) {
    thursdayValue.setAttribute('placeholder', toDoListThursday);
}
if(toDoListFriday) {
    fridayValue.setAttribute('placeholder', toDoListFriday);
}

if(toDoListSaturday) {
    saturdayValue.setAttribute('placeholder', toDoListSaturday);
}

if(toDoListSunday) {
    sundayValue.setAttribute('placeholder', toDoListSunday);
}




 $mondayButton.addEventListener('click', saveToDoListMonday)

function saveToDoListMonday() { 
    var mondayTextInput = mondayValue.value;
    console.log(mondayTextInput);
    mondayValue.setAttribute('placeholder', mondayTextInput)
    localStorage.setItem('Monday', mondayTextInput)
}

$tuesdayButton.addEventListener('click', saveToDoListTuesday)

function saveToDoListTuesday() { 
    var tuesdayTextInput = tuesdayValue.value;
    console.log(tuesdayTextInput);
    tuesdayValue.setAttribute('placeholder', tuesdayTextInput);
    localStorage.setItem('Tuesday', tuesdayTextInput)
}

$wednesdayButton.addEventListener('click', saveToDoListWednesday)

function saveToDoListWednesday() { 
    var wednesdayTextInput = wednesdayValue.value;
    console.log(wednesdayTextInput);
    wednesdayValue.setAttribute('placeholder', wednesdayTextInput);
    localStorage.setItem('Wednesday', wednesdayTextInput)
}

$thursdayButton.addEventListener('click', saveToDoListThursday)

function saveToDoListThursday() { 
    var thursdayTextInput = thursdayValue.value;
    console.log(thursdayTextInput);
    thursdayValue.setAttribute('placeholder', thursdayTextInput);
    localStorage.setItem('Thursday', thursdayTextInput)
}

$fridayButton.addEventListener('click', saveToDoListFriday)

function saveToDoListFriday() { 
    var fridayTextInput = fridayValue.value;
    console.log(fridayTextInput);
    fridayValue.setAttribute('placeholder', fridayTextInput);
    localStorage.setItem('Friday', fridayTextInput)
}

$saturdayButton.addEventListener('click', saveToDoListSaturday)

function saveToDoListSaturday() { 
    var saturdayTextInput = saturdayValue.value;
    // console.log(saturdayTextInput);
    saturdayValue.setAttribute('placeholder', saturdayTextInput);
    localStorage.setItem('Saturday', saturdayTextInput)
}

$sundayButton.addEventListener('click', saveToDoListSunday)

function saveToDoListSunday() { 
    var sundayTextInput = sundayValue.value;
    // console.log(saturdayTextInput);
    sundayValue.setAttribute('placeholder', sundayTextInput);
    localStorage.setItem('Sunday', sundayTextInput)
}



