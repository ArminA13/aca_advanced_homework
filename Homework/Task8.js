// Write a function which remove users with language equals to 'ru'.
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
// filterUsers(users); // [{ username: "Nil Armstrong, lang: "ENG" }]



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

function getRimove (users) {
    return  users.filter((x) => x.lang !== "ru")
}

console.log(getRimove(users));


