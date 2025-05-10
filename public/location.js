const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showLocation(position) {
  console.log(position);
}

getLocation();
