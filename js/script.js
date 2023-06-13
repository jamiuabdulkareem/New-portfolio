"use strict";
const btnScrollTo = document.querySelector(".home-link");

const myName = "Jamiu Abidemi Abdulkareem.";
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

// calling AOS scrolling animation
AOS.init();

// smooth scrolling
btnScrollTo.addEventListener("click", function (e) {
  e.preventDefault();
  ctaSection.scrollIntoView({ behavior: "smooth" });
});
