"use strict";
const myName = "Jamiu Williams AA.";
let i = 0;
// console.log(myName.length);

const typing = () => {
  if (i < myName.length) {
    document.querySelector(".name").innerHTML += myName.charAt(i);
    i++;

    setTimeout(typing, 100);
  }
};

typing();
