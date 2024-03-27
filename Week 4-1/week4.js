/* In order to check where a reference of a variable's value is possible */
// I will create a test case with a function-block scoped structure


//Using var to TEST BLOCK-FUNCTION SCOPES
function checkInput() {
    //Function Scope
    //Hypothecally we have inputfrom a user we want to
    //use the user information in a confined structure
    //This is due to the sensitive nature of Personal Identifiable Information (PII)
    //with maximum security and implement any user testing to validate this
    var name = "Function_Person";
    //Create a Block-scope method to test its reference viability
    if (true) {
        //Block Scope
        var name_2 = "Block_Person";
    }
    //call on both the Block and Function scoped method and see if we could print it out
    console.log(name); //This is scope method
    console.log(name_2); //This is Block scope method

    //We are trying to see if we could reference both in function scope
}

checkInput();

//Using let to TEST BLOCK-FUNCTION SCOPES

function checkInput2() {
    //Take in the parameters i.e User Information
    //and process them respectively

    let name = "Person";

    //Block Scope method to test the block scope variable
    //Create a space to hold and process 
    //credit cards -- this information is more sensitive than name
    //therefore, we want to maje sure it is handled with extra 
    //security in place

    if(true) {
        //create the credit card information
        let credit = 1000;
        console.log("Credit information " + credit); //Block scope
    }
    console.log("Person information : " + name); //Function scope
}

checkInput2();