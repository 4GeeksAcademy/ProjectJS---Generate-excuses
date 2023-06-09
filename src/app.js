/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Generate excuses");
};
let generateExcuse = () => {
  let who = [
    "The dog",
    "My classmate",
    "The police",
    "The turtle",
    "A jogger",
    "A sloth"
  ];
  let action = ["ate", "crushed", "broke", "burned", "threw", "kicked"];
  let what = [
    "my sandwich",
    "my car",
    "my bag",
    "my computer",
    "my ice cream",
    "my homework"
  ];
  let where = [
    "on the street",
    "near the garbage",
    "in front of my house",
    "in the office",
    "near the park"
  ];
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    where[whereIndex]
  );
};
