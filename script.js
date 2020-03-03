// generate password
function generate(){

   

    var value1 = ["A","B","C","D","E","F","G","H",
    "I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    var value2 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","x","y","z"];
    
    var value3 = ["1","2","3","4","5","6","7","8","9","0"];

    var value4 = ["!","@","#","$","%","^","&","*"];
    
var password = [];



var pwlength = prompt("Choose a length between 8 and 128 characters.");
var upper = confirm(" would you like upper case letters?");
var lower = confirm("would you like lower case letters?");
var special = confirm("would you like special characters?");
var numbers = confirm("would you like to include numbers?");

var availablechar = [];

    if(pwlength < 8 && pwlength > 128) {
        alert("please enter another value!");
    }

    if(lower === true) {
    for (i = 0; i< value2.length; i++) {
        availablechar.push(value2[i]);
    }
}
    if(upper === true) {
    for (i = 0; i< value1.length; i ++) {
        availablechar.push(value1[i]);

    }
}
    if(special === true) {
        for (i = 0; i< value4.length; i ++) {
            availablechar.push(value4[i]);

        }
    }
    if (numbers === true) {
        for (i = 0; i< value3.length; i ++) {
            availablechar.push(value3[i]);

        }
    }



for(var i = 0; i <= availablechar; i++){
    prevpass += pwlength[Math.floor(Math.random() * availablechar.length)];


console.log(password);
console.log(availablechar);

document.getElementById("display").availablechar = password;
console.log("display");



document.getElementById("prevpass").innerHTML += password + "<br />";
console.log("prevpass");



document.getElementById("pwlength").innerHTML = "Length: 128";
console.log("pwlength");

return;
}

}
