// Write a function which filters object by field.

const users = [ 
  { 
    username: "Yuri Gagarin", 
    lang: "ru", 
    isAstronaut: true, 
  }, 
  { 
    username: "Nil Armstrong", 
    lang: "ENG", 
    isAstronaut: true, 
  }, 
  { 
    username: "Elon Musk", 
    isAstronaut: false, 
  }, 
]; 

function getFilters (users) {
    return  users.filter((x) => x.isAstronaut !== false )
}

console.log(getFilters(users));
