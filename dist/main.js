(()=>{"use strict";!function(){function e(){const e=document.getElementById("mail").value,n=document.getElementById("emailerror");!function(e){return/\S+@\S+\.\S+/.test(e)}(e)?n.innerHTML="The email format is not valid. Please enter it again.":n.innerHTML=""}function n(){const e=document.getElementById("country").value,n=document.getElementById("countryerror");e.length<3?n.innerHTML="The country's name is too short. Please enter it again.":n.innerHTML=""}function t(){const e=document.getElementById("zip").value,n=document.getElementById("ziperror");!function(e){return/^\d{5}$/.test(e)}(e)?n.innerHTML="Invalid ZIP code. Please enter it again.":n.innerHTML=""}function o(){const e=document.getElementById("password").value,n=document.getElementById("passworderror");e.length<8?n.innerHTML="Password must be at least 8 characters long. Please enter it again.":n.innerHTML=""}function r(){const e=document.getElementById("password").value,n=document.getElementById("confpassword").value;document.getElementById("confpassworderror").innerHTML=e!==n?"Passwords must match.":""}document.getElementById("mail").addEventListener("input",(function(){e()})),document.getElementById("country").addEventListener("input",(function(){n()})),document.getElementById("zip").addEventListener("input",(function(){t()})),document.getElementById("password").addEventListener("input",(function(){o()})),document.getElementById("confpassword").addEventListener("input",(function(){r()})),form=document.getElementById("form"),form.addEventListener("submit",(function(d){d.preventDefault(),e(),n(),t(),o(),r()}))}()})();