// Code solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}
    
function fuzzyMatch(drivers, query){
    return drivers.filter(driver => driver.startsWith(query));
}

function matchName(drivers, query){
    return drivers.filter(driver => driver.name === query);
}


// console.log (findMatching(drivers, "bobby"));
// console.log (findMatching(drivers, 'Sammy'));

// // function findMatching(drivers, query) {
// //     return drivers.filter(driver => driver.toLowerCase().includes(query.toLowerCase(query)));
// // }
// console.log (findMatching(drivers, "bobby"));