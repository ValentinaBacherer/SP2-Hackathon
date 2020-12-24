// Global scope variable
let adaMap;

initMap = function () {

  adaMap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 10, lng: -75 },
    zoom: 2,
  });

  // Static data Marker
  const markerPlace = { lat: -13.024630, lng: -71.551810, };
  const testUserName = "Camila";
  const imageSpecs = {
    url: "https://github.com/sancarbar.png?size=64",
    size: new google.maps.Size(64, 64),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
    scaledSize: new google.maps.Size(25, 25)
  };
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Santiago</h1>' +
    '<div id="bodyContent">' +
    `<p><b>${testUserName}</b> is a mentor at ADA School. ` +
    "This is static info.</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: markerPlace,
    map: adaMap,
    animation: google.maps.Animation.DROP,
    label: testUserName,
    icon: imageSpecs,
  });
  marker.addListener("click", () => {
    infowindow.open(adaMap, marker);
  });

  // Dinamic data 
  const UsersSection = document.getElementById("my-users");
  UsersSection.innerHTML = "";
  // fetch('http://localhost:8080/users-location')
  fetch('/users-location')
    .then(response => response.json())
    .then((data) => {
      data.forEach((user) => {
        // console.log(user);
        const userDiv = document.createElement("div");
        const userName = document.createElement("h4");
        userName.innerHTML = user.name;
        const userImage = document.createElement("img");
        userImage.src = `https://github.com/${user.githubUser}.png?size=64px`;
        userImage.className = "loading-bar";
        // Appending HTML elements
        userDiv.appendChild(userName);
        userDiv.appendChild(userImage);
        userDiv.setAttribute = ('class', 'courses-box');
        userDiv.className = 'courses-box';
        UsersSection.appendChild(userDiv);
        // Creating the google Map Marks
        markerPlace.lat = user.location.lat;
        markerPlace.lng = user.location.lng;
        const userIcon = {
          url: `https://github.com/${user.githubUser}.png?size=64`,
          size: new google.maps.Size(64, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 30),
          scaledSize: new google.maps.Size(25, 25),
        };
        const usercontentString =
          '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          `<h1 id="firstHeading" class="firstHeading"> ${user.name} </h1>` +
          '<div id="bodyContent">' +
          `<p><b>${user.name}</b> is a ${user.role} at ADA School.</p>` +
          `<p>GitHub: ${user.githubUser}, <a href="` + `https://github.com/${user.githubUser}">` +
          "link</a>" +
          ".</p>" +
          "</div>" +
          "</div>";
        const userInfoWindow = new google.maps.InfoWindow({
          content: usercontentString,
        });
        //  console.log(place);
        const userMarker = new google.maps.Marker({
          position: markerPlace,
          map: adaMap,
          label: user.name,
          icon: userIcon,
          animation: google.maps.Animation.DROP,
        });
        userMarker.addListener("click", () => {
          userInfoWindow.open(adaMap, userMarker);
        });
      });
    }
    );

};
