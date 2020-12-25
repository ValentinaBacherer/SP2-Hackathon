const filterForm = document.getElementById("userFilterForm"),
    userFilter = filterForm.querySelector("input");

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = userFilter.value.toLowerCase();
    const queryEndpoint = `/users-location/${currentValue}`;
    initEmptyMap();
    createUsersMarkers(queryEndpoint);
}

function Init() {
    filterForm.addEventListener("submit", handleSubmit);
}

Init();
