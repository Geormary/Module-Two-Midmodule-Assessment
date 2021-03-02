//My SMART GOAL is: track the button click event and check for it through console.log 
//My STRETCH Goals: Create a conditional statement and paste my code in it so that it adds to history on second click 
let values = { "⚀": 1, "⚁": 2, "⚂": 3, "⚃": 4, "⚄": 5, "⚅": 6 };
let values1 = { 1: "⚀", 2: "⚁", 3: "⚂", 4: "⚃", 5: "⚄", 6: "⚅" };
let die = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

document.addEventListener("DOMContentLoaded", () => {
  let inputNum = document.querySelector("input");
  let dicePara = document.getElementById("dice-para");
  let button = document.getElementById("dice-roll");
  let sumPara = document.getElementById("sum-para");
  let historyList = document.getElementById("history-list");
  button.addEventListener("click", (e) => {
    let count = 0;
    if ("click") {
      count++;
      console.log(`this is the count: ${count}`)
    }
    let diceStr = "";
    let sum = 0;
    for (let i = 0; i < inputNum.value; i++) {
      let randNum = Math.floor(Math.random() * die.length);
      diceStr += die[randNum];
      console.log(randNum);
      sum += Number(randNum + 1);
    }
    dicePara.textContent = `Dice: ${diceStr}`;
    sumPara.textContent = `Sum = ${sum}`;

    let li = document.createElement("li");
    li.textContent = `Roll: ${diceStr} Sum: ${sum}`;
    historyList.appendChild(li);
    console.log(historyList.textContent);
  });
});

//when click button
// take input.value
// create string the length of input.value
//each iteration a random die is added to the story

//reflect total sum of those dices
// add total sum to sum para
