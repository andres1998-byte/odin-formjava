function Form(){
    const mail = document.getElementById('mail');
    mail.addEventListener("input", function(){
        validateMail();
    });

    function validateMail(){
        const mail=document.getElementById('mail').value;
        const emailerror=document.getElementById('emailerror');

        if (!isValidEmail(mail)) {
            emailerror.innerHTML="The email format is not valid. Please enter it again.";
        }
        else {
            emailerror.innerHTML="";
        }

        function isValidEmail(mail) {
            var emailRegex=/\S+@\S+\.\S+/;
            return emailRegex.test(mail);

        }
    }

    const country = document.getElementById('country');
    country.addEventListener("input", function(){
        validateCountry();
    });

    function validateCountry(){
        const country=document.getElementById('country').value;
        const countryerror=document.getElementById('countryerror');

        if (country.length<3) {
            countryerror.innerHTML="The country's name is too short. Please enter it again.";
        }
        else {
            countryerror.innerHTML="";
        }
    }

    const zip = document.getElementById('zip');
    zip.addEventListener("input", function(){
        validateZip();
    });

    function validateZip(){
        const zip=document.getElementById('zip').value;
        const ziperror=document.getElementById('ziperror');

        if (!isValidZip(zip)) {
            ziperror.innerHTML="Invalid ZIP code. Please enter it again.";
        }
        else {
            ziperror.innerHTML="";
        }

        function isValidZip(zip) {
            var zipRegex=/^\d{5}$/;
            return zipRegex.test(zip);
        
        }
    }

    const password = document.getElementById('password');
    password.addEventListener("input", function(){
        validatePassword();
    });

    function validatePassword(){
        const password=document.getElementById('password').value;
        const passworderror=document.getElementById('passworderror');

        if (password.length<8) {
            passworderror.innerHTML="Password must be at least 8 characters long. Please enter it again.";
        }
        else {
            passworderror.innerHTML="";
        }
    }

    const confpassword = document.getElementById('confpassword');
    confpassword.addEventListener("input", function(){
        validateConfPassword();
    });

    function validateConfPassword(){
        const password=document.getElementById('password').value;
        const confpassword=document.getElementById('confpassword').value;
        const confpassworderror=document.getElementById('confpassworderror');

        if (password!==confpassword) {
            confpassworderror.innerHTML="Passwords must match.";
        }
        else {
            confpassworderror.innerHTML="";
        }
    }

    form=document.getElementById('form');
    form.addEventListener("submit", function (e){
        e.preventDefault();

        validateMail();
        validateCountry();
        validateZip();
        validatePassword();
        validateConfPassword()

    })


}


export default Form;

