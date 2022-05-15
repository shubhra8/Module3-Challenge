// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(passLength,pass) {
    let password = "";
   
        for (let i = 0; i < passLength ; i++)
         {
     password += pass.charAt(Math.floor(Math.random() * pass.length));

    }
    return password;
  }

// Write password to the #password input
function writePassword() {
  var passLength = prompt("Please enter your Password length:", ' ');
  if ( passLength >=8  && passLength <= 128 ) {
        alert("Password will be  " + passLength + " characters long");
    
    var passNumber =  confirm("Do you want numbers?"); 
    var pass = '';
    var numbers = '0123456789';
    var upperCase =  confirm ("Do you want Upper Case letters");
    var lowerCase =  confirm ("Do you want Lower Case letters");
    var Symbol = confirm ("Do you want special charcter");
    var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
    var spCharcter = '!@#$%^&*()_+~\\`|}{[]:;?><,./-=';

    passNumber ? pass += numbers : "";
    upperCase ? pass += upperLetters : "";
    lowerCase ? pass += lowerLetters : "";
    Symbol ? pass += spCharcter : "" ;

    //password validation to check if at least one character type is included
   // if (pass !== numbers || pass !== upperLetters || pass !== lowerLetters || pass !== spCharcter)
   if (passNumber === false && upperCase === false && lowerCase === false && Symbol === false)
    {
      alert("Please select atleast one Charater Type");
    }
    else{
    }
    
  var password = generatePassword(passLength,pass);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
    }
   
      else 
      {
        alert("Password length should be between 8-128 charaters.");
        
    }  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



