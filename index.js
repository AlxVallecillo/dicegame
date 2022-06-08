// Index and Dice javascript


let dice1Element, dice2Element;

// In this section of code the Dice is rolled.
function diceRoll() {
  return Math.floor(1 + (Math.random() * 6));
}

const sideOfTheDice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

dice1Element = sideOfTheDice[diceRoll() - 1];
dice2Element = sideOfTheDice[diceRoll() - 1];

if (dice1Element === dice2Element) {
  document.querySelector("h1").innerText = 'DRAW ROLL !';
  document.querySelector("div .player1-dice").setAttribute("src", dice1Element);
  document.querySelector("div .player2-dice").setAttribute("src", dice2Element);

} else {
  if (dice1Element > dice2Element) {
    document.querySelector("h1").innerHTML = ' 🚩 PLAYER 1 WINS!';
    document.querySelector("div .player1-dice").setAttribute("src", dice1Element);
    document.querySelector("div .player2-dice").setAttribute("src", dice2Element);
  } else {
    document.querySelector("h1").innerHTML = 'PLAYER 2 WINS! 🚩';
    document.querySelector("div .player1-dice").setAttribute("src", dice1Element);
    document.querySelector("div .player2-dice").setAttribute("src", dice2Element);
  }
}
