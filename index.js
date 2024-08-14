function featurespass( ){
    document.getElementById("Passwordfeature").style.display = "block";
    document.getElementById("mailfeatures").style.display="none";
    document.getElementById("signinbutton").style.display='block';
    document.getElementById("continuebutton").style.display="none";
}
function signinfeatures(){
    document.getElementById("continuebutton").style.display="none";
    document.getElementById("signinbutton").style.display="block";
    document.getElementById("signincolor").style.setProperty("position", "relative", "important");
   
}
function signupfeatures () {
      document.getElementById("defaultfeatures").style.display="none";
      document.getElementById("mysignup").style.display="grid";
      document.getElementById("gofb").style.display="none";
      document.getElementById("signupcolor").style.backgroundColor="#EC1C24";
      document.getElementById("signincolor").style.backgroundColor="#E9E9E9";
      document.getElementById("signuptxt").style.setProperty("color", "#fff", "important");
      document.getElementById("signintxt").style.setProperty("color", "#000", "important");
      document.getElementById("signupcolor").style.setProperty("position", "relative", "important");


}

function defaultfeatures () {
    document.getElementById("mysignup").style.display="none";
    document.getElementById("defaultfeatures").style.display="block";
    document.getElementById("gofb").style.display="block";
    document.getElementById("signupcolor").style.backgroundColor="#E9E9E9";
    document.getElementById("signincolor").style.backgroundColor="#EC1C24";
    document.getElementById("signintxt").style.setProperty("color", "#fff", "important");
    document.getElementById("signuptxt").style.setProperty("color", "#000", "important");
    document.getElementById("signupcolor").style.setProperty("position", "static", "important");


}

function gotodefault() {
    document.getElementById("Passwordfeature").style.display="none";
    document.getElementById("mailfeatures").style.display="block";
}

function openotpsection(){
    document.getElementById("Passwordfeature").style.display="none";
    document.getElementById("otpsection").style.display="block";
}

function gotopasswordfromotp() {
    document.getElementById("otpsection").style.display="none";
    document.getElementById("Passwordfeature").style.display="block";
}

// input ke liye

function featurespass() {
    var emailOrPhone = document.querySelector('#mailfeatures input').value;
    
    
    if (emailOrPhone) {
        var passwordLabel = document.querySelector('#Passwordfeature label');
        passwordLabel.innerHTML = emailOrPhone;


        document.getElementById('mailfeatures').style.display = 'none';
        document.getElementById('Passwordfeature').style.display = 'block';
        document.getElementById('signinbutton').style.display = 'block';
        document.getElementById('continuebutton').style.display = 'none';
    }
}

function gotodefault() {
    
    document.getElementById('mailfeatures').style.display = 'block';
    document.getElementById('Passwordfeature').style.display = 'none';
    document.getElementById('signinbutton').style.display = 'none';
    document.getElementById('continuebutton').style.display = 'block';
}

// captch ke liye

function signupbfeatures() {
    var recaptchaResponse = grecaptcha.getResponse();

    if (recaptchaResponse.length === 0) {
        alert("Please complete the reCAPTCHA verification.");
    } else {
        alert("reCAPTCHA verification successful. Response: " + recaptchaResponse);
    }
}

//  Sign-In password dekhne ke liye
document.getElementById('toggleSignInPassword').addEventListener('click', function (e) {
    const passwordInput = document.getElementById('signInPasswordInput');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle the eye icon
    this.classList.toggle('glyphicon-eye-open');
    this.classList.toggle('glyphicon-eye-close');
});

// Sign-Up password dekhne ke liye
document.getElementById('toggleSignUpPassword').addEventListener('click', function (e) {
    const passwordInput = document.getElementById('signUpPasswordInput');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle the eye icon
    this.classList.toggle('glyphicon-eye-open');
    this.classList.toggle('glyphicon-eye-close');
});


// new css for otp 

function openotpsection() {
    
    document.getElementById('Passwordfeature').style.display = 'none';
    document.getElementById('otpsection').style.display = 'block';


    var storedEmailOrPhone = localStorage.getItem('emailOrPhone');
    if (storedEmailOrPhone) {
        var otpLabel = document.getElementById('otpEmailOrPhoneLabel');
        otpLabel.textContent = storedEmailOrPhone;
    }
}


// logo ke liye

window.onload = function() {
    
    var divs = document.querySelectorAll('#pic');
    var maxHeight = 0;
    divs.forEach(function(div) {
        var divHeight = div.offsetHeight;
        if (divHeight > maxHeight) {
            maxHeight = divHeight;
        }
    });
    divs.forEach(function(div) {
        div.style.height = maxHeight + 'px';
    });
};



