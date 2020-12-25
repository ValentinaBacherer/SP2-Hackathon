const users = [
    {
        name:"Pedro",
        githubUser:"pdsanch1",
        location:{
            lat:6.154570,
            lng:-75.617150,
        },
        role:"developer",
        code:"12345"
    },
    {
        name:"Gabriel",
        githubUser:"jgbernalp",
        location:{
            lat:48.135124,
            lng:11.581981,
        },
        role:"mentor",
        code:"324234"
    },
    {
        name:"Carmen",
        githubUser:"carmensancheez",
        location:{
            lat:18.533270,
            lng:-69.811722,
        },
        role:"developer",
        code:"558190"
    },
    {
        name:"Valentina",
        githubUser:"ValentinaBacherer",
        location:{
            lat:-33.024630,
            lng:-71.551810,
        },
        role:"developer",
        code:"13345"
    },
    {
        name:"Carolina",
        githubUser:"Kharolina",
        location:{
            lat:-74.0817500,
            lng:4.6097100,
        },
        role:"developer",
        code:"13345"
    },
    {
        name:"Sergio",
        githubUser:"shekta99",
        location:{
            lat:-74.0817500,
            lng: 4.6097100,
        },
        role:"mentor",
        code:"990430"
    }
];

function usersFilter(nameFilter) {
    if (nameFilter !== null ){
        const result = users.filter(user => user.name.toLowerCase() === nameFilter);
        if (result.length > 0) {
            return result;
        } else{
            return "error";
        }
    };
};

module.exports = {
    usersList : users,
    usersFilter,
}
