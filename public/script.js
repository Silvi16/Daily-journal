/////////////////////// NAV ///////////////////////////////
const navLinks = document.querySelector('.navLink')


navLinks.addEventListener('click', function() {
    if (this.classList.contains('active')){
        this.classList.remove('active')
    } else this.classList.add('active')
})






// MODAL //////////////////////////////////////////////////////////////
let modal = document.getElementById('myModal');

// Get the button that open the modal
let signIn = document.querySelector('.signIn');

//Get the element that closes the modal
let close = document.getElementById('close');

//When the user clicks on the button, open the modal
signIn.onclick = function () {
    modal.style.display = 'block';
}

 //when user clicks on "close", close the modal   
// NOT WORKING!!!!
close.onclick = function () {
    modal.style.display = 'none';
}

//When the user clicks anywhere outside the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
    modal.style.display = 'none';
    }
}
// FORM ///////////////////////////////////////////////////////////
const form = document.getElementById('modal-content');
const name = document.getElementById('name');
const email = document.getElementById('email');


// Input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Input success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} mast be at least ${min} characters`);
    } else if(input.value.length > max) {
            showError(input, `${getFieldName(input)} must be less than ${max} characters`);
        
    } else {
        showSuccess(input);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check passwords match
function passwordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match'); //show the error on input2
    }
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    passwordsMatch(password, password2);
})
