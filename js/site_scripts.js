// partners.js
document.addEventListener("DOMContentLoaded", function () {
    var fileNames = [
    "partner-bustour.png",
    "partner-cabinrental.png",
    "partner-campingadv.png",
    "partner-collegetours.png",
    "partner-rentalbike.png",
    "partner-tourgroup.png"
  ];
  
  var captions = [
    "Bus Tour",
    "Cabin Rental",
    "Camping Adventure",
    "College Tours",
    "Rental Bike",
    "Tour Group"
  ];

  var imageList = []; 


  for (var i = 0; i < fileNames.length; i++) {
  var image = "<li class='partner'>" +
              "<img src='images/partners/" + fileNames[i] + "'>" +
              "</li>";
  imageList.push(image);
}

  /*document.getElementById("partners").innerHTML = imageList.join("");*/
  document.getElementById("partners").innerHTML = imageList;
});

