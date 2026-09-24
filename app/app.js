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
    answerP.textContent = `Error: No number in input.`;
  } else if (number2 == "") {
    `Error: No number in input.`;
  } else {
    if (expression == "add") {
      let answer = Number(number1) + Number(number2);
      answerP.textContent = `The sum of ${number1} and ${number2} is ${answer}.`;
    } else if (expression == "subtract") {
      let answer = Number(number1) - Number(number2);
      answerP.textContent = `The difference between ${number1} and ${number2} is ${answer}.`;
    } else if (expression == "multiply") {
      let answer = Number(number1) * Number(number2);
      answerP.textContent = `The product of ${number1} and ${number2} is ${answer}.`;
    } else if (expression == "divide") {
      let answer = Number(number1) / Number(number2);
      if (answer == "Infinity") {
        answerP.textContent = `Error: Divide by infinity.`;
      } else {
        answerP.textContent = `The quotient of ${number1} and ${number2} is ${answer}.`;
      }
    } else {
      console.log("Error");
    }
  }
}
