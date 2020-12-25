const filterForm = document.getElementById("userFilterForm"),
    userFilter = filterForm.querySelector("input");

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = userFilter.value.toLowerCase();
    const queryEndpoint = `/users-location/${currentValue}`;
    // Dinamic data 
    const UsersSection = document.getElementById("my-users");
    UsersSection.innerHTML = "";
    fetch(queryEndpoint)
        .then(response => response.json())
        .then((data) => {
            data.forEach((user) => {
                const userDiv = document.createElement("div");
                const userName = document.createElement("h4");
                userName.innerHTML = user.name;
                const userImage = document.createElement("img");
                userImage.src = `https://github.com/${user.githubUser}.png?size=64px`;
                userImage.className = "profile-image";
                // Appending HTML elements
                userDiv.appendChild(userName);
                userDiv.appendChild(userImage);
                userDiv.setAttribute = ('class', 'user-box');
                userDiv.className = 'user-box';
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
                    '<div id="bodyContent">' +
                    `<p><b>${user.name}</b> is a ${user.role} at ADA School.</p>` +
                    `<p>GitHub: ${user.githubUser}, <a href="` + `https://github.com/${user.githubUser}">` +
                    "link</a>" +
                    ".</p>" +
                    "</div>";
                const userInfoWindow = new google.maps.InfoWindow({
                    content: usercontentString,
                });
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
    // search and reloads found users
}

function Init() {
    filterForm.addEventListener("submit", handleSubmit);
}

Init();


// window.onload = (event) => {

//   const usersButton = document.getElementById("button1");
//   usersButton.addEventListener('click', functionOne);
//   const mapButton = document.getElementById("button");
//   mapButton.addEventListener('click', functionTwo);

//   function functionOne() {
//     alert('Nothing here!');
//   }

//   function functionTwo() {
//     setTimeout(function () { alert("Nothing but delayed..."); }, 800);
//   }

// };
