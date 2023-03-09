/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Yojan from the console!");
};

// Se usará JavaScript para crar una función que genere y retorne un valor aleatorio de la siguiente estructura:

const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const arrayPicker = item => item[Math.floor(Math.random() * item.length)];

const arrayConcatenator = ({ who, action, what, when }) =>
  `${who} ${action} ${what} ${when}`;

const writeToHtml = () => {
  const value = {
    who: arrayPicker(who),
    action: arrayPicker(action),
    what: arrayPicker(what),
    when: arrayPicker(when)
  };
  return (document.getElementById("excuse").innerHTML = arrayConcatenator(
    value
  ));
};

document.addEventListener("DOMContentLoaded", writeToHtml);

// let who = ["The dog", "My grandma", "His turtle", "My bird"];
// let action = ["ate", "peed", "crushed", "broke"];
// let what = ["my homework", "the keys", "the car"];
// let when = [
//   "before the class",
//   "right on time",
//   "when I finished",
//   "during my lunch",
//   "while I was praying"
// ];

// function ArrayPicker(item) {
//   let concatenated = item[Math.floor(Math.random() * item.length)];
//   return concatenated;
// }
// function ArrayConcatenator(who, action, what, when) {
//   let sentence = who + " " + action + " " + what + " " + when;
//   return sentence;
// }

// const concatenatedSentence = ArrayConcatenator(
//   ArrayPicker(who),
//   ArrayPicker(action),
//   ArrayPicker(what),
//   ArrayPicker(when)
// );

// function WriteToHtml() {
//   console.log(concatenatedSentence);
//   document.getElementById("excuse").innerHTML = concatenatedSentence;
// }
// document.addEventListener("DOMContentLoaded", WriteToHtml);
