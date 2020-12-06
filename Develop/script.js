var hours = $(".hour");
var timeBlock = $(".time-block");
var saveBtn = $(".saveBtn");

var agenda = [];

//init ()
function init () {
    var storedAgenda = JSON.parse(localStorage.getItem("agenda"));
    if (storedAgenda !== null){
        agenda = storedAgenda;
    }
//renderAgenda ();
}



//$("#currentDay").text(DateTime.local());
$("#currentDay").text(luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }));