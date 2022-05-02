let level = 1;
const levelInput = document.getElementById('levelInput');
const levelSlider = document.getElementById('levelSlider');
const levelOutput = document.getElementById('levelOutput');

let power = 1;
const powerInput = document.getElementById('powerInput');
const powerSlider = document.getElementById('powerSlider');
const powerOutput = document.getElementById('powerOutput');

let attack = 1;
const attackInput = document.getElementById('attackInput');
const attackSlider = document.getElementById('attackSlider');
const attackOutput = document.getElementById('attackOutput');

let defense = 1;
const defenseInput = document.getElementById('defenseInput');
const defenseSlider = document.getElementById('defenseSlider');
const defenseOutput = document.getElementById('defenseOutput');

let Badge = 1;
let Burn = 1;
let Critical = 1;
let other = 1;
let random = 1;
let STAB = 1;
let Targets = 1;
let Type = 1;
let Weather = 1;
const output = document.getElementById('output');
let damage = -1;
updateCalculation();

function updateSlider() {
  levelInput.value = levelSlider.value;
  powerInput.value = powerSlider.value;
  attackInput.value = attackSlider.value;
  defenseInput.value = defenseSlider.value;
  updateCalculation();
}

function updateCalculation() {
  //update values
  level = parseInt(levelInput.value)
  power = parseInt(powerInput.value)
  attack = parseInt(attackInput.value)
  defense = parseInt(defenseInput.value)
  levelSlider.value = level;
  levelOutput.innerText = '' + level;
  powerSlider.value = power;
  powerOutput.innerText = '' + power;
  attackSlider.value = attack;
  attackOutput.innerText = '' + attack;
  defenseSlider.value = defense;
  defenseOutput.innerText = '' + defense;


  damage = (divide(((divide((2 * level), 5) + 2) * power *
      // I am not sure about the integer division rules - truncation here would mean 0 anytime att < def
      // divide(attack, defense)
      (attack / defense)
    ), 50) + 2) *
    Targets * Weather * Badge * Critical * random * STAB * Type * Burn * other;
  output.innerHTML = '' + damage;
}

function divide(num, denom) {
  //not sure if the max
  return Math.max(Math.floor(num / denom), 1)
}


