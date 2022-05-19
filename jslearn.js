//Javascript statements
//let x,y,z;

x=5;
y=6;
z=x+y;
document.getElementById("demo1").innerHTML = z;

//variable declaration using let:Block scope, cannot be redlared,has to be declared before use,can be reassigned
function func1() {

let carName = "volvo" ;
//let carName ;

document.getElementById("demo2").innerHTML = carName;
}

//variable declaration using var: No Block scope, can be redlared ,can use before declaration
function func() {    
    var carName= "volvo" ;
    var carName;    
    document.getElementById("demo2").innerHTML = carName;
    }


//variable declaration using const : cannot be redeclared ad reassigned , has block scope ,must be assigned during declaration
function func1() {    
    const carName= "volvo" ;
    document.getElementById("demo2").innerHTML = carName;
    }

//Assignment Operators
function func1() {    
    let x=3,y=4;
    let text1 = "What a very ";
    text1 += "nice day";
    x+=1;
    y-=1;
    document.getElementById("demo1").innerHTML = x;
    document.getElementById("demo2").innerHTML = y;
    document.getElementById("demo3").innerHTML = text1;
    }

    //Type operators & bitwise Operators
    function func1() {    
        let x=3;
        let y= 16 + 4 + "Volvo";
        let z= "Volvo" + 16 + 4;
        document.getElementById("demo1").innerHTML = typeof(x);
        document.getElementById("demo2").innerHTML = y;
        document.getElementById("demo3").innerHTML = z;
    }

//Arrays
function func1() {
    
const cars = ["Saab","Volvo","BMW"];
document.getElementById("demo1").innerHTML = cars[0];
}

// Objects are containers for proprties and methods. Properties are name values and methods are actions to be performed on objects
//A method is a function stored as a property

function func1() {
    let car;
    z=undefined;
const person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };
  
  document.getElementById("demo1").innerHTML =
  person.firstName + " is " + person.age + " years old.";
  document.getElementById("demo2").innerHTML = typeof(person);
  document.getElementById("demo3").innerHTML = typeof(car);
  document.getElementById("demo4").innerHTML = typeof(z);
}

//String Methods
function func1()
{
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
let part = txt.slice(7, 13);
let part1 = txt.slice(7);
let part2 = txt.substr(7,13);
let part3 = txt.substr(-4);
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
let text3 = "Hello World!";       // String
let text4 = text3.toLowerCase(); 
let text5 = "Hello";
let text6 = "World";
let text7 = text5.concat(" ", text6);
let text8 = "5";
let padded = text8.padStart(4,"x");
let t=text3.split(" ")  

document.getElementById("demo1").innerHTML =length;
document.getElementById("demo2").innerHTML = part;
document.getElementById("demo3").innerHTML = part1;
document.getElementById("demo4").innerHTML = part2;
document.getElementById("demo5").innerHTML = part3;
document.getElementById("demo6").innerHTML = newText;
document.getElementById("demo6").innerHTML = text2;
document.getElementById("demo7").innerHTML = text4;
document.getElementById("demo8").innerHTML = text7;
document.getElementById("demo9").innerHTML = padded;
document.getElementById("demo10").innerHTML = text3.charAt(0);
document.getElementById("demo11").innerHTML = t;
}
