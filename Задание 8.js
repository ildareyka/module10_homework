let myMap = {
    name: 'Igor',
    age: 34,
    height: 170
  }; 
  
  let keys = Object.keys(myMap); 
  
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(`Ключ - ${key}, значение - ${myMap[key]}`);
  }