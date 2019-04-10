const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let count = 0;

function init() {
  // Write your JavaScript code inside the init() function
  if (code[count] === e.which){
    ++count;
    if (count === code.length){
      alert("");
      count = 0;
    }
  } else {
    count = 0;
  }

}
