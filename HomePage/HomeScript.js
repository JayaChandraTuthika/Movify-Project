let faqTextContainer1 = document.getElementById("faq1");
let faqTextContainer2 = document.getElementById("faq2");
let faqTextContainer3 = document.getElementById("faq3");
let faqTextContainer4 = document.getElementById("faq4");
let faqTextContainer5 = document.getElementById("faq5");
let faqTextContainer6 = document.getElementById("faq6");

let expand1 = document.getElementById("faqTextExpanded1");
let expand2 = document.getElementById("faqTextExpanded2");
let expand3 = document.getElementById("faqTextExpanded3");
let expand4 = document.getElementById("faqTextExpanded4");
let expand5 = document.getElementById("faqTextExpanded5");
let expand6 = document.getElementById("faqTextExpanded6");

let expandIcon1 = document.getElementById("faqExpandIcon1");
let expandIcon2 = document.getElementById("faqExpandIcon2");
let expandIcon3 = document.getElementById("faqExpandIcon3");
let expandIcon4 = document.getElementById("faqExpandIcon4");
let expandIcon5 = document.getElementById("faqExpandIcon5");
let expandIcon6 = document.getElementById("faqExpandIcon6");
let compressIcon1 = document.getElementById("faqCompressIcon1");
let compressIcon2 = document.getElementById("faqCompressIcon2");
let compressIcon3 = document.getElementById("faqCompressIcon3");
let compressIcon4 = document.getElementById("faqCompressIcon4");
let compressIcon5 = document.getElementById("faqCompressIcon5");
let compressIcon6 = document.getElementById("faqCompressIcon6");

faqTextContainer1.addEventListener("click", () => {
  expand1.classList.toggle("expand");
  expandIcon1.classList.toggle("hide");
  compressIcon1.classList.toggle("hide");
});

faqTextContainer2.addEventListener("click", () => {
  expand2.classList.toggle("expand");
  expandIcon2.classList.toggle("hide");
  compressIcon2.classList.toggle("hide");
});
faqTextContainer3.addEventListener("click", () => {
  expand3.classList.toggle("expand");
  expandIcon3.classList.toggle("hide");
  compressIcon3.classList.toggle("hide");
});
faqTextContainer4.addEventListener("click", () => {
  expand4.classList.toggle("expand");
  expandIcon4.classList.toggle("hide");
  compressIcon4.classList.toggle("hide");
});
faqTextContainer5.addEventListener("click", () => {
  expand5.classList.toggle("expand");
  expandIcon5.classList.toggle("hide");
  compressIcon5.classList.toggle("hide");
});
faqTextContainer6.addEventListener("click", () => {
  expand6.classList.toggle("expand");
  expandIcon6.classList.toggle("hide");
  compressIcon6.classList.toggle("hide");
});

// Adding Errortext elements

const getStartedBtn = document.getElementById("getStartedButton");
const emailInput = document.getElementById("emailInputHeader");
let emailErrMsg = document.getElementById("emailErrorMsg");

getStartedBtn.addEventListener("click", () => {
  if (emailInput.value === "") {
    emailErrMsg.textContent = "**Enter Your Email.**";
  } else {
    emailErrMsg.textContent = "";
  }
});

const bannerText = document.getElementById("bannerText");
const signUpBtn = document.getElementById("signUpBtn");
let closeModelBtn1 = document.getElementById("closeModelBtn1");

closeModelBtn1.onclick = function () {
  bannerText.classList.remove("hide");
};

signUpBtn.onclick = function () {
  bannerText.classList.add("hide");
};
