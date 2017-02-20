

var operatorArray = [ "-", "+"];
var digitArray = ["0", "1", "2", "3", "4", "5", "6"];
var numberStore = [];
var currentNumber = "";
var operatorStore= []
var currentOperator = "";
var lastOperatorClicked = false;
var lastButtonBack = false;

	function display(value) {
		return function () {
				var disp = document.getElementsByClassName("display");
					disp[0].innerHTML += value;

				if (digitArray.includes(value)) {
					currentNumber += value;
					lastOperatorClicked = false; 
				}

				else if (operatorArray.includes(value) && !lastOperatorClicked) {
					numberStore.push(currentNumber);
					currentNumber = ""
					lastOperatorClicked = true;
					currentOperator = value;
					operatorStore.push(currentOperator);
				}

		}
	} ;


	function calculate() {
		return function () {
			var disp = document.getElementsByClassName("display");
			disp[0].innerHTML = eval(disp[0].innerHTML); 
		} ;
	}

function init() {
	var buttonDigit = document.getElementsByClassName("digit");
	var buttonOperation = document.getElementsByClassName("operation");
	var buttonEqual = document.getElementsByClassName("equal");

	for (var i=0; i < buttonDigit.length; i++) {
			buttonDigit[i].addEventListener("click", display(buttonDigit[i].innerHTML), false);
		}

	for (i=0; i < buttonOperation.length; i++) {
			buttonOperation[i].addEventListener("click", display(buttonOperation[i].innerHTML), false);
	}
	 
	buttonEqual[0].addEventListener("click", calculate(), false);

}
	
window.addEventListener("load", init, false);
