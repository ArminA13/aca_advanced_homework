// Write a function which returns array of lengths of user names
// const users = [ 
//   { 
//     username: "Yuri Gagarin", 
//     lang: "ru", 
//   }, 
//   { 
//     username: "Nil Armstrong", 
//     lang: "ENG", 
//   }, 
// ]; 
// getUsernameLengths(users); // [12, 13]


const users = [ 
    { 
      username: "Yuri Gagarin", 
      lang: "ru", 
    }, 
    { 
      username: "Nil Armstrong", 
      lang: "ENG", 
    }, 
  ]; 

function getUserName (users) {
    let arr = [];
    users.map((x) => arr.push(x.username.length));

    return arr;
}

console.log(getUserName(users));