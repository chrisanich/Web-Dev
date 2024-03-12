function email() {
    let fname = document.getElementById("firstnamex").value;
    let sname = document.getElementById("secondnamex").value;
    let user_email = document.getElementById("emailaddressx").value;
    let message = document.getElementById("usermessagex").value;
    let answer = "Thank you " + fname + " for your message. We will get back to you at " + user_email + " as soon as possible.";
    document.getElementById("answerx").textContent = answer;
}


/*Dropdown menu*/
document.querySelector('.dropdown').addEventListener('mouseover', function() {
    this.children[1].style.display = 'block';
});

document.querySelector('.dropdown').addEventListener('mouseout', function() {
    this.children[1].style.display = 'none';
});