const arr = [1, 1, 3, 1];

for(let i = 1; i < arr.length; i++){
  if(arr[0] !== arr[i]){
    console.log(false);
    break;
  } else {
    console.log(true);
  }
};