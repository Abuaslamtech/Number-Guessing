//declaring variables
const input = document.getElementById("input");
const right = document.getElementById("right");
const wrong = document.getElementById("wrong");
const reset = document.getElementById("reset");
const submit = document.getElementById("submit");
const trialOutput = document.getElementById("trialOutput");
const sbtn = document.getElementById("sbtn");
const gameP = document.getElementById("gameP");
const selections = document.getElementById("selections");
const gameOverp = document.getElementById("gameOverp");
const resultmsg = document.getElementById("resultmsg");
const start = document.getElementById("start");
const trials = 5;
let trial = 0;
let userInputs = [];
let sn = [];

//generate random number
let rNumber = Math.floor(Math.random() * 10);

//generate a list of trial outputs by user
function listTrials(lists) {
  let li = " ";
  for (index in lists) {
    li += "<li>" + lists[index] + "</li>";
  }
  trialOutput.innerHTML = li;
}

//selection page
function selectionP() {
  selections.style.display = "none";
  gameP.style.display = "flex";
  gameOverp.style.display = "none";
  input.value = " ";
  start.innerHTML = "Start A New Game";
}

//game over
function gameOver() {
  gameOverp.style.display = "flex";
  gameP.style.display = "none";
  selections.style.display = "none";
  sbtn.addEventListener("click", selectionP);
  start.innerHTML = `You exceed ${trials} trials`;
}

//the main game
function guessIt() {
  //hide game page and display selections list
  start.innerHTML = "Your Guessed Numbers";
  sbtn.classList.remove("hide");
  gameP.style.display = "none";
  selections.style.display = "flex";
  if (input.value == rNumber && trial < trials) {
    trial++;
    userInputs.push(input.value);
    listTrials(userInputs);
    resultmsg.innerHTML = "You guess it right";
  } else if (input.value !== rNumber && trial < trials) {
    selections.style.display = "flex";
    trial++;
    userInputs.push(input.value);
    listTrials(userInputs);
    wrong.style.backgroundColor = "red";
    resultmsg.innerHTML = "You guess it wrong!";
  } else {
    console.log(trials + " trials exceeded");
  }
}

//handle play again button
function handlebtn() {
  if (trial < trials) {
    selectionP();
  } else {
    gameOver();
  }
}

//reset form
function resetInput() {
  input.value = "";
  console.log(input.value);
  trial = 0;
  userInputs = [];
}

//event listeners
reset.addEventListener("click", resetInput);
submit.addEventListener("click", guessIt);
sbtn.addEventListener("click", handlebtn);
