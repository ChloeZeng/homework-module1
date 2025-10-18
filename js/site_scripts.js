// partners.js — Bootstrap-compatible
document.addEventListener("DOMContentLoaded", function () {
  const fileNames = [
    "partner-bustour.png",
    "partner-cabinrental.png",
    "partner-campingadv.png",
    "partner-collegetours.png",
    "partner-rentalbike.png",
    "partner-tourgroup.png",
  ];

  const captions = [
    "Bus Tour",
    "Cabin Rental",
    "Camping Adventure",
    "College Tours",
    "Rental Bike",
    "Tour Group",
  ];

  const partnersContainer = document.getElementById("partners");
  let html = "";

  // Use Bootstrap grid columns
  for (let i = 0; i < fileNames.length; i++) {
    html += `
      <div class="col-6 col-sm-6 col-md-4 col-lg-2 mb-4 text-center">
        <div class="partner">
          <img src="images/partners/${fileNames[i]}" alt="${captions[i]}" class="partner-img img-fluid">
        </div>
        <p class="partner-caption">${captions[i]}</p>
      </div>
    `;
  }

  partnersContainer.innerHTML = html;
});
