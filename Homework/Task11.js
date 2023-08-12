// Write a function which calculates average age of users.
// const users = [ 
//   { 
//     username: "Yuri Gagarin", 
//     lang: "ru", 
//     age: 56, 
//   }, 
//   { 
//     username: "Nil Armstrong", 
//     lang: "ENG", 
//     age: 54, 
//   }, 
// ]; 
// getAverageAge(users); // 55

const users = [ 
  { 
    username: "Yuri Gagarin", 
    lang: "ru", 
    age: 56, 
  }, 
  { 
    username: "Nil Armstrong", 
    lang: "ENG", 
    age: 54, 
  }, 
]; 


function getAverageAge (users) {
    return Math.floor(users.reduce((acc, element) => (acc + element.age),0)/users.length)

}

console.log(getAverageAge(users));