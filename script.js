/*const sub = document.createElement("h2");
sub.textContent = "I added this content";
document.querySelector("body").appendChild(sub); */

const foodLink = document.getElementsByClassName("foodLink")
foodLink.addEventListener("click", sendGoodbye);

function sendGoodbye(){
    alert (`Enjoy the ${foodName}!`);
}


function initMap() {
    //location of St. Petersburg
    const stPetersburg = { lat: 59.937, lng: 30.308 };
    // The map, centered at St. Petersburg
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: stPetersburg,
    });
    // The marker, positioned at St. Petersburg
    const marker = new google.maps.Marker({
      position: stPetersburg,
      map: map,
    });
  }