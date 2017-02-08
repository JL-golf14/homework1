


var firstArray = ["ASDF", "BLAH", "Oh! ", "Hi ", "There!"];

var num = 3;
function myFunction(firstArray){

  return firstArray[num]+firstArray[(num+1)]+firstArray[(num+2)];
}

console.log(myFunction(firstArray,num));
