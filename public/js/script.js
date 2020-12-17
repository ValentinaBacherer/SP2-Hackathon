let adaMap;

initMap = function () {
  const place = { lat: -13.024630, lng: -71.551810, }
  const adaMap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 10, lng: -75 },
    zoom: 2,
  });
  const imageSpecs = {
    url: "https://github.com/sancarbar.png?size=64",
    size: new google.maps.Size(64, 64),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
    scaledSize: new google.maps.Size(25, 25)
  }
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Santiago</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Santiago </b> is a mentor at ADA School. " +
    "This is static info.</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  // The marker, positioned at Valparaiso
  const marker = new google.maps.Marker({
    position: place,
    map: adaMap,
    animation: google.maps.Animation.DROP,
    label: "Santiago",
    icon: imageSpecs,
  });
  marker.addListener("click", () => {
    infowindow.open(adaMap, marker);
  });
  const coursesSection = document.getElementById("my-courses");
  coursesSection.innerHTML = "";
  fetch('http://localhost:8080/users-location')
    .then(response => response.json())
    .then((data) => {
      data.forEach((user) => {
        console.log(user);
        const courseDiv = document.createElement("div");
        const courseCode = document.createElement("h2");
        courseCode.innerHTML = user.name;
        const courseBar = document.createElement("img");
        courseBar.src = `https://github.com/${user.githubUser}.png?size=64px`;
        courseBar.className = "loading-bar";
        // Appending HTML elements
        courseDiv.appendChild(courseCode);
        courseDiv.appendChild(courseBar);
        courseDiv.setAttribute = ('class', 'courses-box');
        courseDiv.className = 'courses-box';
        coursesSection.appendChild(courseDiv);
        // Creating the google Map Marks
        place.lat = user.location.lat;
        place.lng = user.location.lng;
        const image = {
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
          position: place,
          map: adaMap,
          label: user.name,
          icon: image,
          animation: google.maps.Animation.DROP,
        });
        userMarker.addListener("click", () => {
          userInfoWindow.open(adaMap, userMarker);
        });
      });
    }
    );

};
