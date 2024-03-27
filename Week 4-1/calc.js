//construct the global variable (parameters)
//instantiate them with a default value empty

//Take the current number from the user
let currentInput = "";
//Take the current operator from the user
let currentOperator = "";
//Take the previous input from the user
let previousInput = "";

//method to clear the display
function clearDisplay() {
    //to clear the display we first reset all the stored values in the number and operator variables
    currentInput = "";
    currentOperator = "";
    previousInput = "";
    //now that we have cleared the display we want to 
    //show the updated display to the user
    updateDisplay();
}

//create a function to append numbers
function appendNumber(number) {
    //Take in a number from the user
    //This parameter can be called anything
    //To append the number from the user we overwrite the current input
    currentInput += number; //this allow us to add one number after the other wen pressing them
    //This will allow us to store and operate on the current number
    //now that we have appended the number we update the display 
    updateDisplay();
}

//create a method to append the operator
function appendOperator(operator){
    //take the operator from the user and check what type of operator is required
    //Once we take in the operator, we can calculate the output
        //Step 1. Pass in the number
        //Step 2. Check if we have an operator
        //Step 3. Calculate

        //Current number is whatever the user gave us before they press an operator i.e + - / *
        if(currentInput !== "") {
            //we can operate on the numbers
            if(previousInput !== "") {
                calculate();
            }

            //Shift the value of the current input to the previous
            previousInput = currentInput; //current number moved to previous number
            //to free up the current number for a new number
            currentInput = "";
            currentOperator = operator; // current operator
            updateDisplay();
        }


}

//create a function to update the display
function updateDisplay() {
    //to update display we need to reference the display object by ID
    //then we reassign the current value
    //the current value is what is displayed ib tge displayed screen to the user
    document.getElementById("display").value = currentInput;

}

//create and process the calculations
function calculate() {}


