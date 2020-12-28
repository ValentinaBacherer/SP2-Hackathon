const filterForm = document.getElementById("userFilterForm"),
    filterInput = filterForm.querySelector("input");

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = filterInput.value.toLowerCase();
    const queryEndpoint = `/users-location/${currentValue}`;
    initEmptyMap();
    createUsersMarkers(queryEndpoint);
}

function Init() {
    filterForm.addEventListener("submit", handleSubmit);
}

Init();
