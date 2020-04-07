
var number = document.getElementById("half-input");
var calculateButton = document.getElementById("half-button");
// var outputParagraph = document.getElementById("outputText");

calculateButton.addEventListener("click", halfNumber);

function halfNumber() {
  var numberHalved = (number.value / 2);
  if (number.value > 0) {
    alert(numberHalved);
    console.log("Half of " + number.value + " is " + numberHalved);
  }

  else {
    alert("Please input a number greater than zero");
  }
  // var numberAsValue = number.value;
  // outputParagraph.innerText = "Half of " + numberAsValue + " is " + numberHalved;
}



// ### FUNCTION 2 ###

var fortuneInput = document.getElementById("fortune-input");
var fortuneButton = document.getElementById("fortune-button");
var fortuneOutput = document.getElementById("fortune-output-paragraph");

fortuneButton.addEventListener("click", fortune);

function fortune() {
  if (fortuneInput.value.length > 0 && fortuneInput.value.length <= 5) {
    fortuneOutput.innerText = "The fortune you seek is on another website.";
  }

  else if (fortuneInput.value.length > 5 && fortuneInput.value.length <= 10) {
    fortuneOutput.innerText = "Lucky numbers: " + randomRed + ", " + randomGreen + ", " + randomBlue + ".";
  }

  else if (fortuneInput.value.length > 10) {
    fortuneOutput.innerText = "He who chooses the fortune over the cookie, deserves neither.";
  }

  else {
    alert("Please input");
  }
}




var randomRed = Math.floor(Math.random() * 255);
var randomGreen = Math.floor(Math.random() * 255);
var randomBlue = Math.floor(Math.random() * 255);

var degreeValue = Math.random() * 30 + Math.random() * -30;

var transitionTime = Math.random() * 5;

var aniIteration = Math.random() * 5;


fortuneButton.addEventListener("click", restyle);

function restyle() {
  fortuneOutput.style.fontSize = "20pt";
  fortuneOutput.style.padding = "5px";

  fortuneOutput.style.color = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  fortuneOutput.style.transform = "rotate(" + degreeValue + "deg)";
  fortuneOutput.style.transitionDuration = transitionTime + "s";

  fortuneOutput.style.animationIterationCount = aniIteration;
  // rotate.keyframes.transform = "rotate(" + degreeValue + "deg)";
}















// spacer
