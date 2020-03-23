var mondayValue = document.querySelector("#inputValueMonday");


var $mondayButton = document.querySelector("mondayBtn");



function saveMonday(){
    var toDoListMonday = localStorage.getItem('Monday');
    if (mondayValue.value){
        localStorage.setItem('Monday', mondayValue.value);
    } else {
        mondayValue.value = toDoListMonday;
    }

}