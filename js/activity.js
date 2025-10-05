$(document).ready(function(){

})

$("td").click(function(){
    //if "not available"
    if ($(this).text().trim() === "Not Available" || $(this).is("th")) {
        return;
    }

    $(this).toggleClass("selected");

    //display hand
    $("td").hover(function(){
    if ($(this).text().trim() !== "Not Available" && !$(this).is("th")) {
      $(this).css("cursor", "pointer");
    } else {
      $(this).css("cursor", "default");
    }
  });
});