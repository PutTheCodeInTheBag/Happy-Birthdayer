var Name;
var Age;

 document.querySelector("#button").onclick = function() {
  
Name = document.getElementById("Name").value;
Age = document.getElementById("age").value;

//this is going to check if the inputs are filled

if (Age == null || Name.length == 0) {
 return;
}
//console.log(Name + " " + Age);

//this should change the text in the card

const h1 = document.querySelector("#myH1");
h1.innerText = "Happy Birthday!";

const text = document.querySelector("#H");
text.innerText = "Happy  "+Age+" years old birthday, "+Name+"!";

//this section will remove buttons and inputs form the card

const button = document.querySelector("#button");
button.remove();
const Ninput = document.querySelector("#Name");
Ninput.remove();
const Ainput = document.querySelector("#age");
Ainput.remove();


}