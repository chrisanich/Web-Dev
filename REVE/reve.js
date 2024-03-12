function email() {
    var user_email = document.getElementById("emailaddress").value;
    document.getElementById("user_email").textContent = user_email;
}


/*Dropdown menu*/
document.querySelector('.dropdown').addEventListener('mouseover', function() {
    this.children[1].style.display = 'block';
});

document.querySelector('.dropdown').addEventListener('mouseout', function() {
    this.children[1].style.display = 'none';
});