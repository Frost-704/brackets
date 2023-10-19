module.exports = function check(str, bracketsConfig) {
  let testArray = str.split('');
  let start = [];
  let end = [];
  let arrLength = str.length;
  let stack = [];
  for (let test of bracketsConfig) {
    start.push(test[0]);
    end.push(test[1]);
  }
    for (let i = 0; i < arrLength; i += 1) {
      if (end.includes(testArray[i]) && stack.length !== 0 && `${stack[stack.length - 1]}${end[start.indexOf(stack[stack.length - 1])]}` === `${stack[stack.length - 1]}${testArray[i]}`) {
        stack.pop();
        } else {
        stack.push(testArray[i]);
        } 
      }
  return stack.length === 0 ?  true : false;
}

