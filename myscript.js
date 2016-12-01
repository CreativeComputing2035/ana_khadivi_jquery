$(document).ready(function(){ //Run the following after the page is ready.
    "use strict";             //Tell jQuery to be strict about the syntax.
    //In the next line we select the item with the ID "myList" and then the first "li" in that item.
    //We add a ".on" event handler with "mouseover" and create an anonymous function which runs when the event is triggered.
    $("#myList li:first").on("mouseover", function(evt){
        //Do you know what this next line does? Look up the .css() method.
        $(this).css("color","green");
    });
    //The next line puts an "on click" handler and is almost the same but it calls a named function.
    $("#myList li:nth-child(2)").on("click", swapMe);
    //This uses a shorthand way attaching a click handler.
    $("#myList li:nth-child(3)").click(myFunction2);
    $("#myList li:nth-child(4)").on("click", myFunction3);
    $("#myList li:nth-child(5)").one("click", function(evt) {
        myFunction4("#square4");
                                   });
    $("#square4").hide();
    $("#square1").click(function(){
        $("#square1").html("Among individuals, as among nations, respect for the rights of others is peace.");
    })
    $("#square1").dblclick(function(){
        $("#square1").html("Don't cry because it's over, smile because it happened.");
    })
    $("#square2").mouseover(function(){
        $("#square3").animate({
            right: '250px'
        });
    })
  $("#button").click(function(){
    var number = $("#number").val();
    var color = $("#color").val();
        if (number == "1") {
            $("#square_a").css("background-color", color);
        } else if (number == "2") {
            $("#square_b").css("background-color", color);
        } else {
    $("#square_c").css("background-color", color);
                }
      })
function changeBackground() {
    var color = document.getElementById("color").value; // cached

    // The working function for changing background color.
    document.bgColor = color;

    // The code I'd like to use for changing the text simultaneously - however it does not work.
    document.getElementById("coltext").style.color = color;
}

document.getElementById("submitColor").addEventListener("click", changeBackground, false);

});
//-------------------------------------------------------------------
//The code below are functions that will only run when called by name.
function swapMe() {
    // create a variable and store the contents of the third item.
    var tempText = $("#myList li:nth-child(3)").text();
    // Replace the contents of the 3rd item with the contents of the 4rth.
    $("#myList li:nth-child(3)").text($("#myList li:nth-child(4)").text());
    // Replace the contents of item 4 with the contents of the "tempText".
    $("#myList li:nth-child(4)").text(tempText);
};
// function swtichQuote(){
//     var tempQuote = $("squaresDiv li:nth-child(1)").text();
//     $("#squaresDiv li:nth-child(2)".text($("#squaresDivli:nth-child(2)").text());
//         $("#squaresDiv li:nth-child(2)").text(tempQuote);
// }
function myFunction2() {
    // Change the css
    $(this).css({"text-shadow":"4px 4px #FFFF00","font-size":"300%"});
}
function myFunction3() {
    //Here is a neat one. Add a new class to tag so it takes on a whole new look.
    //Also, because it uses "this" the same function can be used on many items.
    $(this).toggleClass("long-shadow");
};
function myFunction4(myObject) {
    $(myObject).slideDown()
        .delay(2000)
        .animate({left: '+=700px'})
        .animate({top: '-=400px',
                  height: '500px'}, "slow");

}
