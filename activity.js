$(document).ready(function(){

})

$("td").click(function(){
    //if "not available"
    if ($(this).text().trim() === "Not Available" || $(this).is("th")) {
        return;
    }

    $(this).toggleClass("selected");
});