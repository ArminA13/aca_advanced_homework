// Write a function which returns array of usernames.
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
 
// getUserNames(users); // ['Yuri Gagarin', 'Nil Armstrong']


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
    users.map((x) => arr.push(x.username));

    return arr;
}

console.log(getUserName(users));