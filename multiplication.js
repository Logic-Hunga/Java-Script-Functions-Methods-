"use strict";

const myvariable = require("prompt-sync");
const prompt = myvariable();

let name = prompt("Enter name: ");

console.log("hello ${name}");
