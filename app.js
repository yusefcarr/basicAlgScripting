// <!-- 3 -->
const myArray = [["Wizards", 25], ["Mages", 50]];

// <!-- 4 -->
function multiplyAll(arr) {
  
  for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  
  }
  } 
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


  <!-- 5 -->
  function greatestNum(param1, param2) {
    if (param1 > param2) {
  
    return param1;
  } else {
    return param2;
  }
}
greatestNum (12, 15)


  <!-- 6 -->
function compareValue(wizard, witch) {
if (wizard == witch) {
    return "These things are equal"}
else { 
return "these things are not equal"
};
} console.log(compareValue(50, 50))
console.log(compareValue(50, 52))