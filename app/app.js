const buttonPress = document.getElementById("button");
const answerP = document.getElementById("answer");

buttonPress.addEventListener("click", () => {
  calculate();
});

function calculate() {
  let number1 = document.getElementById("numberInputOne").value;
  let number2 = document.getElementById("numberInputTwo").value;
  let expression = document.getElementById("expressions").value;

  if (number1 == "") {
    answerP.innerHTML = `Error: No number in input.`;
  } else if (number2 == "") {
    answerP.innerHTML = `Error: No number in input.`;
  } else {
    if (expression == "add") {
      let answer = Number(number1) + Number(number2);
      answerP.innerHTML = `The sum of ${number1} and ${number2} is ${answer}.`;
    } else if (expression == "subtract") {
      let answer = Number(number1) - Number(number2);
      answerP.innerHTML = `The difference between ${number1} and ${number2} is ${answer}.`;
    } else if (expression == "multiply") {
      let answer = Number(number1) * Number(number2);
      answerP.innerHTML = `The product of ${number1} and ${number2} is ${answer}.`;
    } else if (expression == "divide") {
      let answer = Number(number1) / Number(number2);
      if (answer == "Infinity") {
        answerP.innerHTML = `Error: Divide by zero.`;
      } else {
        answerP.innerHTML = `The quotient of ${number1} and ${number2} is ${answer}.`;
      }
    } else {
      console.log("Error");
    }
  }
}
