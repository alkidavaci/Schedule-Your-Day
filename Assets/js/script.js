// Displayed current day
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// Function save "To do" text with key time in local storage
function toDo(el) {
    // Declared toDo variable to contain the text
    // '.siblings()' get children with description attribute from same parent
    var toDoText = $(el).siblings(".description").val();
    // Declared time variable to contain the hour
    // '.attr()' get the value of an attribute for the parent of the button
    var time = $(el).parent().attr("id");

    // Set them in local storage key is time and value is to do text
    localStorage.setItem(time, toDoText);
}
// Event for clicking save button
$(".saveBtn").on("click", function () {
    // 'this' is for the button where the event happen
    toDo($(this));
});

//Each time get the toDoText from local storage and put the value in textarea 
$("#7 .description").val(localStorage.getItem("7"));
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("0"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));
$("#19 .description").val(localStorage.getItem("19"));
$("#20 .description").val(localStorage.getItem("20"));
$("#21 .description").val(localStorage.getItem("21"));
$("#22 .description").val(localStorage.getItem("22"));
