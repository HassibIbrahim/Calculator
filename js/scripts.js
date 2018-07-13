

var add= function(number1,number2){return number1 + number2};

var subtract= function(number1,number2){return number1 - number2;};

var multiply= function(number1,number2){return number1 * number2;};

var divide= function(number1,number2){return number1 / number2;};




$(document).ready(function(){
$("form").submit(function(event) {
  var why =$("#calculations").val()
  var number1 = parseInt($("#number1").val())

  var number2 = parseInt($("#number2").val())

  if (why === "Add") {
  // alert(add(number1,number2));
$("p#matokeo").append(add(number1,number2));
  }else if (why === "Subtract") {
    // alert(subtract(number1,number2));
    $("p#matokeo").append(subtract(number1,number2));
  }else if (why === "Multiply") {
    // alert(multiply(number1,number2));
    $("p#matokeo").append(multiply(number1,number2));
  }else if (why === "Divide") {
  // alert(divide(number1,number2));
  $("p#matokeo").append(divide(number1,number2));
  }

  event.preventDefault();

})
});

//  $(document).ready(function subtract() {
//   var input1 = #no1.val()
//   var input2 = #no2.val()
// });
//
// $(document).ready(function multiply() {
// var input1 = #no1.val()
// var input2 = #no2.val()
// });
//
// $(index).ready(function divide() {
//   var input1 = #no1.val()
//   var input2 = #no2.val()
// });
//
//
// operate = function(.no1, .no2, operation) {
//   .no1 = parseFloat(.no1);
//   .no2 = parseFloat(.no2);
//   console.log(.no1, .no2, operation);
//   if (operation === '+') return .no1 + .no2;
//   if (operation === '-') return .no1 - .no2;
//   if (operation === '*') return .no1 * .no2;
//   if (operation === '/') return .no1 / .no2;
// }
//
//
//   if  (Operation === "+") {
//   return .no1 + .n02
//   }
// else if (Operation === "-") {
// return .no1 - .no2
// }
// if (operation === "*"){
// return .no1 * .no2
// }
// else {
// }if (operation === "/"){
//   return .no1 / .no2
// }
