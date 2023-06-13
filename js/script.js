"use strict";
const btnScrollTo = document.querySelector(".home-link");
const ctaSection = document.querySelector("#cta");
const ctaFname = document.querySelector("#fName");
const ctaEmail = document.querySelector("#email");
const ctaSubject = document.querySelector("#subject");
const ctaMsg = document.querySelector("#msg");

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

// calling AOS scrolling animation
AOS.init();

// smooth scrolling
btnScrollTo.addEventListener("click", function (e) {
  e.preventDefault();
  ctaSection.scrollIntoView({ behavior: "smooth" });
});

// Contact form
const sendEmail = function (e) {
  e.preventDefault();
  Email.send({
    SecureToken: "23e6fa94-fcaa-4668-9311-067b86bd31e7",
    To: "jamiuabdulkareem08@gmail.com",
    From: ctaFname.value,
    Subject: ctaSubject.value,
    Body: ctaMsg.value,
  }).then(function (message) {
    alert("mail sent successfully");
  });
};

document.querySelector(".ctaBtn").addEventListener("click", sendEmail);
