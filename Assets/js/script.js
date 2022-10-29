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