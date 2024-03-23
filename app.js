






// TABLE ASSIGNMENT STARTED




// let table=+prompt("What table do you want to perform?");


// let count=1;

// document.write(table + " X " + (count) + " = " +table*count++ +"<br />");
// document.write(table + " X " + (count) + " = " +table*count++ +"<br />");
// document.write(table + " X " + (count) + " = " +table*count++ +"<br />");
// document.write(table + " X " + (count) + " = " +table*count++ +"<br />");
// document.write(table + " X " + (count) + " = " +table*count++ +"<br />");
// document.write(table + " X " + (count) + " = " +table*count++ +"<br />");
// document.write(table + " X " + (count) + " = " +table*count++ +"<br />");
// document.write(table + " X " + (count) + " = " +table*count++ +"<br />");
// document.write(table + " X " + (count) + " = " +table*count++ +"<br />");
// document.write(table + " X " + (count) + " = " +table*count++ +"<br />");


// TABLE ASSIGNMENT ENDED

// ////////////////////////////////////////

// TEMPERATURE CONVERTOR ASSIGNMENT STARTED


// let centiG=+prompt("Write a temperature you want to convert into centigrade?")

// let fahrenH=(centiG*9/5)+32;

// let message="The temperature in fahrenheit is " +fahrenH;

// document.write(message);



// TEMPERATURE CONVERTOR ASSIGNMENT ENDED

// //////////////////////////////////////////


// SHOPPING CART ASSIGNMENT STARTED

// let quantity1 = +prompt("What is the quantity of item-1? ");

// let quantity2 = +prompt("What is the quantity of item-2? ");

// let price1 = +prompt("What is the price of item-1? ");

// let price2 = +prompt("What is the price of item-2? ");


// let shippingCharges = 200;

// let total1=price1*quantity1;

// let total2=price2*quantity2;

// let total=total1+total2+shippingCharges;


// let message = (" <h1> Shopping Cart </h1> <br /> Price of item-1 is = " + price1 + " <br /> Quantity of item-1 is =" + quantity1 + " <br /> Price of item-2 is = "
//     + price2 + "<br /> Quantity of item-2 = " + quantity2 + " <br /> Shipping Charges = " + shippingCharges + "<br /> Total cost of your order is " +total);


// document.write(message);



// SHOPPING CART ASSIGNMENT ENDED

// //////////////////////////////////





// percentage assignment started

// let totalMarks=+prompt("What is the total marks?");

// let marksObtained=+prompt("What is your obtained marks?");

// let percentage= (marksObtained*100)/totalMarks;

// let message= "Total Marks = " +totalMarks + " <br /> Obtined Marks = " + marksObtained + " <br /> Percentage = " + percentage + "%";

// document.write(message);


// percentage assignment ended

// //////////////////////////////////////


// Currency Converter started


// let usd=104;

// let riyal=28;


// let  quantityUsd=+prompt("How much usd do you have?");

// let quantityRiyal=+prompt("How much Riyal do you have?");

// let totalUsdInPkr=usd*quantityUsd;

// let totalRiyalInPkr=riyal*quantityRiyal;


// let total=totalUsdInPkr+totalRiyalInPkr;

// let message="Total currency in pkr : " +total;

// document.write(message);





// Currency Converter ended



// ////////////////////////////////////////////



// Age calculator started


// let currentYear=+prompt("What is the current year?");

// let birthYear=+prompt("What is your birth year");

// let age=currentYear-birthYear;

// let message= "They are either " + age + " or " + ++age;

// document.write(message);






// Age calculator ended


// ///////////////////////////////////



// Geomatry started

// let radius=+prompt("What is the radius?");

// let circumference=2*3.142*radius;

// let area=3.142*(radius**2);

// let message="The radius of a circle : " + radius + " <br /> The circumference of a circle is : " +circumference+
// " <br /> The area of a circle is : " +area;

// document.write(message);



// Geometry ended


// ///////////////////////////////



// Encrement assignment 


// let number=+prompt("What is the number?");

// let message= "The value of a is: "+number+"<br /> The value of ++a is: " + ++number + "<br /> Now the value of a is: " +number+ "<br /> The value of a++ is: "
// +number++ +"<br /> Now the value of a is: " +number+ "<br /> The value of --a is: " + --number+ "<br /> Now the value of a is: "
// +number+"<br /> The value of a-- is: "+number-- +"<br /> Now the value of a is: " +number ;

// document.write(message);



// Encrement assignment ended

// //////////////////////////////////

// The lifetime supply calculator

// let snack=prompt("What is your favourite snack")

// let snackQuantity=+prompt("How much snakcs do you need per day?");

// let currentAge=+prompt("What is your current age?");

// let maximumAge=+prompt("What is the maximum estimated age of yours?");

// let subtraction=maximumAge-currentAge;

// let result1=subtraction*365;

// let result2=result1*snackQuantity;

// let message="<h1>The lifetime  supply calculator</h1> "+" <br /> Favourite snack: "+snack+" <br /> Current age: "+currentAge+
// " <br /> Estimated maximum age: "+maximumAge+ "<br /> Amount of snacks per day: "+snackQuantity+ "<br /> You will need "+result2+" "+
// snack+" to last you until the ripe old age of "+maximumAge;



// document.write(message);







// The lifetime supply ended





// ///////////////////////////////////////////////////////






// javascript exercises started

// /////////////////////

// calculator started

// let firstNumber = +prompt("What is your first number?");

// let secondNumber = +prompt("What is your second number?");

// let expressions = prompt("What is the exression you want to perform?", "+,-,*,/");

// let addition = firstNumber + secondNumber;

// let substriction = firstNumber - secondNumber;

// let multiplication = firstNumber * secondNumber;

// let division = firstNumber / secondNumber;


// if(expressions==="+"){
//     document.write(addition);
// }
// else if(expressions==="-"){
//     document.write(substriction);
// }
// else if(expressions==="*"){
//     document.write(multiplication);
// }else if(expressions==="/"){
//     document.write(division);
// }










// calculator ended

// ////////////////////////



// javascript exercises ended


// //////////////////////////////////////



// ////////////////



// practice started



// let areYouGraduate = confirm("Are you graduate?");

// if (areYouGraduate) {
//     let faculty = prompt("Which faculty you have done.");

//     if (faculty === "medical") {

//         let interests = prompt("Which field you choose?");

//         if (interests === "dentist") {
//             document.write("You are appointed as dentist");
//         } else if (interests === "phsycologisy") {
//             document.write("You are appointed as phsycologist");
//         }
//     }
//     else if (faculty === "commerce") {
//         document.write("You are appointed as business consultant.");
//     }
//     else if (faculty === "engineering") {
//         document.write("You are appointed as engineer.");
//     }
//     else if (faculty === "hr") {
//         document.write("You are appointed as HR assistant.");
//     }
// }
// else {
//     document.write("You are appointed as peon.");
// }


// ///////////////////////////////////



// let students=[1];

// students[0]="noman"
// students[1]="sadiq ul rehman"
// students[2]="faisal"

// console.log(students)


// /////////////////////////////


// even and odd number checker

// let number = +prompt("What is the number?");

// let result=number%2===0;

// if (result) {
//    console.log("even");
// }
// else{
//     console.log("odd");
// }



// even and odd number checker

// ////////////////////////////

// age checker started


// let age = +prompt("What is your age?");

// if (age>18) { 
//     document.write("Old enough.");
// }
// else{
//     document.write("Too young.");
// }




// age checker ended



// ////////////////////////////

// question-4 started

// let myName="noman";

// let nameOfUser=prompt("What is your name?");

// if(nameOfUser===myName){
//    let message="Hello! "+nameOfUser+" How are you doing today?"
//     document.write(message);
// }




// question-4 ended


// ///////////////////////////////


// question-5 started


// let number=+prompt("What is the number?");

// let result=number%3===0;

// if(result){
//     let message=number +" is divisible by 3.";
//     document.write(message);
// }
// else{
//     let message=number+ " is not divisible by 3.";
//     document.write(message);
// }




// question-5 ended 

// /////////////////////////


// question-9 started


// let year = +prompt("What is the year?");

// let currentyear = 2024;

// if (year < currentyear) {
//     document.write("This is the leap year.");
// }
// else if(year===currentyear){
//     document.write("This is the current year.");
// }
// else if(year>currentyear){
//     document.write("This is the future year.");
// }




// question-9 ended

// //////////////////////////

// question-10 started

// let password = 12345678;

// let userPassword = +prompt("What is the password?");

// if (userPassword === password) {
//     console.log("Correct!");
// } 
// else if (userPassword === 0) 
// { console.log("Please enter your password"); }
// else { console.log("Incorrect password.") }


// question-10 ended

// //////////////////////////////////

// question-11 started


// let firstName = "Ali";

// firstName=prompt("What is your name?");

// if (firstName === "Fahad") {
//  document.write("Hello Fahad!");
// }else{
//     document.write("you are not Fahad.")
// }






// question-11 ended

// //////////////////////////////

// question-12 started

// let greeting;
//  let hour = 13;
//  if (hour < 18) {greeting = "Good day"} else { greeting = "Good evening"} 




// question-12 ended

// /////////////////////////

// question-13 started

// let integer1 = +prompt("What is the integer?");

// let integer2 = +prompt("What is the second integer?");


// if (integer1 > integer2) {
//     console.log(integer1);
// } else if (integer2 > integer1) { console.log(integer2) }
// else if (integer1 === integer2) { console.log(integer1 + " and " + integer2 + " are equal.") }


// question-13 ended

// ///////////////////////

// question-14 started

// let number = +prompt("What is the number?");

// if (number === 0) {
//     console.log("It is a zero.");
// } else if (number < 0) { console.log("It is a negative number."); }
// else {
//     console.log("It is a positive number.");
// }




// question-14 ended

// ////////////////////

// question-16 started




// question-16 ended

// ////////////////////////////

// question-17 started

// let userInput = prompt("Enter something.");

// let vowel = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];

// if (vowel.indexOf(userInput)!=-1) {
//     console.log("True");
// }
// else{
//     console.log("False");
// }

// question-17 ended



// practice ended


