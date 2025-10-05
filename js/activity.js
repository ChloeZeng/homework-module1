// User interaction with table cells
$(document).ready(function() {
  $("td").click(function () { // when user clicks a table data cell
    var content = $(this).text(); // get cell text
    var colIndex = $(this).index(); // get column index of clicked cell
    var cliffName = $("th").eq(colIndex).text(); // get corresponding Cliff name from header row

    // Skip "Not Available" and first column (Activity titles)
    if (content === "Not Available" || colIndex === 0) {
      return;
    }

    // Toggle highlight
    $(this).toggleClass("tdhighlight");

    // Add or remove from result box
    if ($(this).hasClass("tdhighlight")) {
      $("#displaySelected").css("visibility", "visible").css("margin-top", "2em");
      $("#result").append("<p>" + content + " <span class='cliffName'>at " + cliffName + "</span></p>");
    } else {
      $("#result p:contains('" + content + "')").remove();
      // If no activities selected, hide the display box
      if ($("#result").children().length === 0) {
        $("#displaySelected").css("visibility", "hidden").css("margin-top", "0");
      }
    }
  });
});

