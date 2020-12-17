window.onload = (event) => {
    const usersButton = document.getElementById("button1");
          usersButton.addEventListener('click', fillUsers);
    const mapButton = document.getElementById("button");
          mapButton.addEventListener('click', fillMap);
          // console.log(usersButton);
    const barUrl = "./img/loading-bar.png";
  
    function fillUsers () {
      const coursesSection = document.getElementById("my-courses");
      coursesSection.innerHTML = "";
      fetch('http://localhost:8080')
      .then(response => console.log("Llamada Servidor", response));
      fetch('http://localhost:8080/users-location')
      .then(response => response.json())
      .then((data) => {
        data.forEach((course) => {
           console.log(course);
           const courseDiv = document.createElement("div");
           const courseCode = document.createElement("h2");
           courseCode.innerHTML = course.name;
           const courseName = document.createElement("h2");
           courseName.innerHTML = "Git user: " + course.githubUser;
           const courseDescription = document.createElement("p");
           courseDescription.innerHTML = course.role;
           const courseBar = document.createElement("img");
           courseBar.src = barUrl;
           courseBar.className = "loading-bar";
           // append elements
           courseDiv.appendChild(courseCode);
           courseDiv.appendChild(courseName);
           courseDiv.appendChild(courseDescription);
           courseDiv.appendChild(courseBar);
           courseDiv.setAttribute = ('class', 'courses-box');
           courseDiv.className = 'courses-box';
           coursesSection.appendChild(courseDiv);
        });
    });
 };
function fillMap () {
    const coursesSection = document.getElementById("my-courses");
    coursesSection.innerHTML = "";
    setTimeout(function(){ alert("We dont know how to load a map yet..."); }, 1000);
  }

};
