//elementselectorForBar
const barOne = document.querySelector("#line1");
const barTwo = document.querySelector("#line2");
//elementselectorForCircle
const circleTwo = document.querySelector("#two");
const circleThree = document.querySelector("#three");
//elementselectorForButtons
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

var nextCount = 0;

function nextButton() {
  prev.removeAttribute("disabled");
  nextCount++;
  console.log(nextCount);
  if (nextCount == 1) {
    barOne.style.borderColor = "lavender";
    circleTwo.style.borderColor = "lavender";
  } else if (nextCount == 2) {
    barTwo.style.borderColor = "lavender";
    circleThree.style.borderColor = "lavender";
    next.setAttribute("disabled", true);
  }
}

function prevButton() {
  if (nextCount == 1) {
    nextCount = 0;
    barOne.style.borderColor = "grey";
    circleTwo.style.borderColor = "grey";
    prev.setAttribute("disabled", true);
  } else if (nextCount == 2) {
    nextCount = 1;
    barTwo.style.borderColor = "grey";
    circleThree.style.borderColor = "grey";
    next.removeAttribute("disabled");
  }
}
next.addEventListener("click", nextButton);
prev.addEventListener("click", prevButton);
