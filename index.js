"use strict";

let names = "binod";
let count = 0;
let arr = [];

for (let i = 0; i < names.length; i = i + 1) {
    if(names[i] == "a") {
        count = count + 1;
    } else if(names[i] == "e"){
        count = count + 1;
    } else if(names[i] == "i") {
        count = count + 1;
    } else if(names[i] == "o") {
        count = count + 1;
    } else if(names[i] == "u") {
        count = count + 1;
    };
};

console.log(count);