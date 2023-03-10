//window.alert("Hello From Alert");

// document.write("<h1>Hello From Java Script</h1>");

/* Console 
console.log(
  "Hello From %cJS %cFile",
  "color: red; font-size: 4px",
  "color: blue; font-size: 4@px"
);

console.error("error");
console.table(["Ahmed", "Mohamed", "Ali"]);
*/

/* ES6 

//ES >> ECMA Script
// هي معايير للغة الجافا سكريبت
// var my_name = "Mahmoud";
// console.log("Hello :", my_name);
// console.log(`Hello : ${my_name}`); // Ecma Princibles
*/

/* Data Types 


console.log(typeof "Mahmoud Ashraf");
console.log(typeof 10);
console.log(typeof 50.5);
console.log(typeof [10, 25, 30]); //Array > object
console.log(typeof ["ma", "ah", "os"]); //Array > object.
console.log(typeof { name: "Mahmoud", value: 10 }, {
  name: "ahmed",
  value: 15,
}); //Object

console.log(typeof true); //Boolean
*/

/* Variables 
var firstVar = "Mahmoud";
console.log(`firstVar : ${firstVar}`);
*/

/* Var, Let, Const Compare 

// First Item in Comparsation (ReDeclare)
// var a = 1;
// var a = 2; // Here we do a declaration
// console.log(a);

// let b = 1;
// let b = 2; // Here we Cannot ReDeclare The keyword
// console.log(b);
// const c = 1;
// const c = 2; // Here we Cannot ReDeclare The keyword
// console.log(c);

// console.log(a);

// var a = 1; //Error Will be Undefined
// console.log(b);
// const b = 2; //Error will be descriped
*/

/* String Syntax And Character Escape Sequences
// console.log("ElNabwy \"Mahmoud\"");
 */

// console.log(Number("28-12-99")); //Get Number From String
// let a = "20";
// console.log(a++);

/* Numbers
console.log(1e6); //1 Million
console.log(10 ** 6); // 10 * 10 * 10 * 10 *10 *10
console.log(Number("100")); // 100
console.log(typeof Number); //Function

console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log((100).toString()); // 100
//console.log(100..toString()); // 100
console.log((100.555555).toFixed()); //To Fixed : (بتتحكم في ان عاوز ارجع كام رقم) //To Fixed Return String

console.log(parseInt("100")); // 100 as Integer
console.log(parseInt("100 Mahmoud")); // 100 as Integer
console.log(parseInt("Mahmoud 100 Mahmoud")); //NAN

console.log(Number.isInteger("1000")); //False
console.log(Number.isInteger(1000.5)); //False
console.log(Number.isInteger(1000)); //True
*/

/* Math Object With Numbers 

console.log(Math.round()); //بتقرب الارقام
console.log(Math.round(99.2)); //99
console.log(Math.round(99.6)); //100
console.log(Math.ceil(99.9)); // هتتقرب لفوق لاعلي حاجة بغض النظر الرقم اققل من 0.5 ولا اكبر
console.log(Math.floor(99.9)); //جاية من اسمها هتقرب الرقم لأقل حاجة سواء اققل او اكبر من 0.5
console.log(Math.min(10, 20, 30, 100, -90)); //Get The Minimum Number
console.log(Math.max(10, 20, 30, 100, -90)); //Get The Maximum Number
console.log(Math.pow(2, 4)); //بتستقبل رقم والأس بتاعه
console.log(Math.random()); //Get any Number
console.log(Math.trunc(99.5)); //Remove decimal Numbers and return the right Number (99)

*/

/* String Methods 
let theName = "Ahmed";
let name = "  Mahmoud";
let theList = [1, 2, 3, 4, 5];
console.log(theName[1]); //H
console.log(theName.charAt(2)); //m
console.log(name);
console.log(name.trim()); //Trim : Remove Spaces


let title = "Mahmoud Ashraf Mohamed Elnabwy";

// console.log(title.indexOf("Mohamed")); // If Mahmoud is Exist it will return it's index else it will return -1
// console.log(title.indexOf("Mahmoud", 5)); // It will start searching from index = 5

// console.log(title.lastIndexOf("Mahmoud", 5)); // It will search as indexof but it start from the end.

// console.log(title.slice(0, 15)); //It will take string from index 0 to index 15 (Mahmoud Ashraf)

// console.log(title.repeat(4));

// console.log(title.split()); // it will return title as Array (['Mahmoud Ashraf Mohamed Elnabwy'])
// console.log(title.split("")); // it will cut all elements and spaces ['M', 'a', 'h', 'm', 'o', 'u', 'd', ' ', 'A', 's', 'h', 'r', 'a', 'f', ' ', 'M', 'o', 'h', 'a', 'm', 'e', 'd', ' ', 'E', 'l', 'n', 'a', 'b', 'w', 'y']
// console.log(title.split(" ")); // ['Mahmoud', 'Ashraf', 'Mohamed', 'Elnabwy']
// console.log(title.split(" ", 2)); //['Mahmoud', 'Ashraf']

console.log(title.substring(0, 7)); //Mahmoud
console.log(title.substr(0, 7)); //Mahmoud
console.log(title.includes("web")); //False
console.log(title.includes("Mahmoud", 0)); //True (it will start searching from index 0)
console.log(title.startsWith("a")); // False
console.log(title.startsWith("a", 1)); // True

*/

/* Switch Method 

let day = 0;
switch (day) {
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  /*
     case 2:
     case 3: //في 2 او 3 هيطلع نفس النتيجة 
    console.log("Monday");
    break;
     */
/*
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  default:
    console.log("Undefined");
    break;
}
*/

/* Arrays 

// let myFriends = [
//   "Ahmed",
//   "Mahmoud",
//   "Sayed",
//   ["Marwan", "Ali", "Aya", "Kamal"],
// ]; //First Define of array
// //Access Array Elements
// console.log(`Hello ${myFriends[0]}`);
// console.log(`Hello ${myFriends[1][2]}`);

// //Access Nested Array
// console.log(`Hello ${myFriends[3][1]}`);

// console.log(myFriends);
// myFriends[1] = "Changed";
// console.log(myFriends);

// //Adding Elements To Array
// let arrLength = myFriends.length;

// myFriends[arrLength] = "Gamal";
// console.log(myFriends);

// let arr = ["Ahmed", "Ali", "Aya", "Yara", "Honey", "Ibrahim"];
// console.log("arr :", arr);

// arr.unshift("Osama", "Nabil"); // Accept Number of elements that we need to add at the start of array
// console.log("arr unshift :", arr);

// arr.push("Amr", "Goda"); //Accept Number of elements that we need to add at the end of array
// console.log("arr  push:", arr);

// arr.shift(); //Remove the first element from the start of array [Warnning : it store the element in Memory so we can call it any time]
// console.log("arr shift", arr);

// //Array Searching

// let newArr = ["MERCEDES", "BMW", "BUGGATI", "FIAT", "KIA"];
// console.log(newArr.indexOf("BMW")); //out put : 1
// console.log(newArr.indexOf("FIAT", 1)); // It will start searching from index 1
// console.log(newArr.lastIndexOf("Ahmed")); //It will start searching from the end of array

// console.log(newArr.includes("Ahmed")); // False
// console.log(newArr.includes("BMW", 1)); //It will start from index 1 (true)
*/

/* Loops

// let myFriends = [1, 2, "Osama", "Ali", "Nancy", "Ahmed"];

// for (let i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === "string") {
//     console.log("Your Friend Name is :", myFriends[i]);
//   } else {
//     console.log("It is Nubmer !");
//   }
// }

//Nested Loop
// let products = ["Keyboard", "Mouse", "Monitor", "Head Phone"];
// let colors = ["Red", "Green", "Blue"];
// let Models = [2021, 2022];
// for (let i = 0; i < products.length; i++) {
//   console.log("###################");
//   console.log("Product :", products[i]);
//   for (let x = 0; x < colors.length; x++) {
//     console.log(colors[x]);
//   }
//   console.log("###################");
// }

// let products = ["Keyboard", "Mouse", "Monitor", "Head Phone"];
// let colors = ["Red", "Green", "Blue"];
// let Models = [2021, 2022];
// for (let i = 0; i < products.length; i++) {
//   console.log("###################");
//   console.log("Product :", products[i]);
//   console.log("###################");

//   if (products[i] == "Mouse") {
//     break;
//   }
// }
 */

/* Do & While

let products = ["Keyboard", "Mouse", "Monitor", "Head Phone"];
//While Condition is true loop will be run
let index = 0;
while (index < 10) {
  console.log(index);
  index++;
  if (index === 3) {
    break;
  }
}
 */

/* Functions 
/* Generate Random Password 
function generateP() {
  var pass = "";
  var str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";
  for (let i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  return console.log(pass);
}
generateP();
*/

/* Rest Parameters (accept infinity numbers of params)

// function calc(...numbers) {
//   for (let i = 0; i <= numbers.length; i++) {
//     console.log(numbers[i]);
//   }
// }
// calc(10, 20, 30, 40, 50);
 */

//Nested Function

// function sayMessage(fName, lName) {
//   let msg = "Hello";

//   function printMsg() {
//     msg = `${msg} ${fName} ${lName}`;
//   }
//   printMsg();
//   return msg;
// }
// console.log(sayMessage("Mahmoud", "Nabwy"));

// //Arrow Function
// let print = () => 10;
// console.log(print());

/* Higher Order Functions 

// Higher Order Function : Function that accept function as parameter and this parameter accept function parameters

// let myNums = [1, 2, 3, 4, 5, 6];
// let newArr = [];
// for (let i = 0; i < myNums.length; i++) {
//   newArr.push(myNums[i] + myNums[i]);
// }
// console.log(newArr);


let addSelf = myNums.map(function (el, index, arr) {
  return el + el;
}, 10);
console.log(addSelf);

let addSelfTwo = myNums.map((a) => a + a);
console.log("🚀 ~ file: main.js:344 ~ addSelfTwo", addSelfTwo);

//Filter High Order Function

let friends = [
  "Mahmoud",
  "Ali",
  "Abdo",
  "Ahmed",
  "Galal",
  "Ramdan",
  "Khaled",
  "Hassan",
  "Mamdouh",
];
let numbers = [11, 20, 2, 5, 17, 10];

let addMap = numbers.map(function (el) {
  return el + el;
});
console.log("🚀 ~ file: main.js:364 ~ addMap ~ addMap", addMap);

//Filter Method
let filterdFriends = friends.filter(function (el) {
  if (el.startsWith("A")) {
    return console.log("Your Friend :", el);
  } else {
    return console.log("Not Found", el);
  }
});

let sentence = "I Love Foood than Football very much bye";
let smallWords = sentence.split(" "); //[ "I", "Love", "Foood", "than", "Football", "very", "much", "bye" ]

let mix = "A13BS2ZX";
//Reqs
//1- Filter Numbers and Strings
//2- Multiply Numbers in it self

let mixedContent = mix
  .split("")
  .filter(function (el) {
    return !isNaN(parseInt(el));
  })
  .join("");
let onlyNumbers = mixedContent.split("");
console.log("🚀 ~ file: main.js:390 ~ onlyNumbers", onlyNumbers);

let mapNumbers = onlyNumbers.map(function (el) {
  return console.log(`Element is : ${el} and It's Muliple : ${el * el}`);
});

//Foreach
let arr = [
  { id: 1, name: "Mahmoud" },
  { id: 2, name: "Ahmed" },
  { id: 3, name: "Moustafa" },
  { id: 4, name: "Khalid" },
  { id: 5, name: "Ali" },
];

arr.forEach((element) => {
  console.log(`Element ${element.id}  :`, element.name);
});
*/

/* Objects 

// let myVar = "gender";

// let user = {
//   //Properties
//   name: "Mahmoud",
//   password: "123456",
//   gender: "Male",
//   email: "mahmodashrf79@gmail.com",
//   age: 24,
//   //Methods
//   sayHello: function () {
//     console.log(`Hello ${this.name}`);
//   },
//   "country Of": "Egypt",
// };
// user.sayHello();
// console.log(user.age);
// console.log(user["country Of"]);
// console.log(user[myVar]); // Equal the underline
// console.log(user.gender);

// //Nested Object
// let secondUser = {
//   name: "Mahmoud",
//   age: 23,
//   skills: ["Html", "css", "cs50", "js"],
//   available: false,
//   addresses: {
//     ksa: "Riyadh",
//     egypt: {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   checkAvailable: function () {
//     if (this.available) {
//       console.log("User is Available");
//     } else {
//       console.log("User Is Not Available");
//     }
//   },
// };
// //Access Array from Object
// console.log(
//   "🚀 ~ file: main.js:456 ~ secondUser.skills.join",
//   secondUser.skills.join("|")
// );
// secondUser.available = true;
// secondUser.checkAvailable();

// //Access Object From Object
// console.log(secondUser.addresses.egypt.one); //Parent > Child > Child > Child (another way in next line)
// console.log(secondUser["addresses"].egypt.one); //(another way in next line)
// console.log(secondUser["addresses"]["egypt"]["one"]);

// //Create Object With Create Method
// let obj = Object.create(user);
// console.log("obj :", obj);
// console.log("obj Name :", obj.name);

// //Create Object With Assign Method

// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop2: 2,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let targetObj = {
//   prop1: 1,
//   prop3: 3,
// };

// let finalObj = Object.assign(targetObj, obj1, obj2);
// console.log("🚀 ~ file: main.js:495 ~ finalObj", finalObj); //لو في اكتر من بروب بنفس الاسم هياخد قيمه اول واحدة تقابله
// finalObj.prop1 = 500;
// console.log(finalObj);
*/

/* Window Location Object 
// console.log(location);
// console.log(location.href);
// console.log(location.host);
// console.log(location.hostname);
// console.log("History :", history.length);
// console.log("History Back:", history.back());
// console.log("History Forward:", history.forward());

// location.href='/#(idOfElemeninHtml)'
*/

/* setTimeout and clearTimeout 

//Set Time Out Function : Function that execute Order After part of time
setTimeout(function () {
  console.log(`Msg`);
}, 3000);

setTimeout(sayHello, 3000);

function sayHello() {
  console.log("Hello");
}

setTimeout(sayMsg, 3000, "Mahmoud");

function sayMsg(user) {
  console.log(`Hello Mr: ${user}`);
}
*/

/* clearTimeout 
//Clear Time Out Stop Time Counter Of Set Time out
*/

/* setInterval 

//Set Interval Like setTimeOut  But it's repeats her orders again and again
//First : It Call the function
//Second : after the time we set it call the function again
//Third it doesn't stop until we use clearInterval Fucntion
*/

/* Local Storage  

/*
=> setItem
=> getItem
=> removeItem
=> clear
=> key
Info:
=> No Expiration Time
=> Http And Https
=> Private Tab

localStorage.setItem("color", "#F00"); //Add new key in local storage
localStorage.fontWeight = "bold"; //Add new key in local storage
localStorage["fontSize"] = "20"; //Add new key in local storage

//Get Item From Local Storage
console.log(localStorage.getItem("color"));
console.log(localStorage.color);
console.log(localStorage["color"]);

//Get Key From Local StorAGE
console.log(localStorage.key(0));

//Remove Item From Local Storage
localStorage.removeItem("fontSize");

//Clear All Items In Local Storage
localStorage.clear();

//Set Color in Page Example

document.body.style.backgroundColor = localStorage.getItem("color");
//Note : Local Storage Doesn't Have Expiration Time
*/

/* Session Storage 
/* 
=> setItem
=> getItem
=> removeItem
=> clear
=> key
Info:
=> New Tab = New Session
=> Duplicate Tab = Copy Session
=> New Tab With The Same Url = New Session

*/

/* Destructuring  Arrays


Destructuring is a JavaScript expression that allow us to extract data from arrays,objects, and map and set them into
new , distinct variables


let myFriends = ["Mahmoud", "Ali", "Ahmed", "Noor", "Galal"];
let [a, b, c, d] = myFriends;

let [...users] = myFriends;
console.log("Users :", users);
//If We want get the index 0 , 1 , 2 and skip 3 we do that
let [g, m, k, , o] = myFriends; // it will get index 0 , 1 , 2 , skip 3 , 4
console.log(g);
console.log(m);
console.log(k);
console.log(o);

if (null === null) {
  console.log("Truuueee");
}
//Swap Variables With Out Destructuring
let book = "video";
let video = "book";
// let swapVar = book; //Video
// book = video;
// video = swapVar;
// console.log("book :", book);
// console.log("Video :", video);
// Swap Variables With Destructuring
[book, video] = [video, book];
console.log("🚀 ~ file: main.js:628 ~ video", video);
console.log("🚀 ~ file: main.js:628 ~ book", book);
*/

/*Destructuring Objects  

const user = {
  theName: "Mahmoud",
  theAge: 21,
  theTitle: "Developer",
  theCountry: "Egypt",
  skills: {
    html: 50,
    css: 70,
  },
};
// console.log("user.theName :", user.theName);
// console.log("user.theAge :", user.theAge);
// console.log("user.theTitle :", user.theTitle);
// console.log("user.theCountry :", user.theCountry);

// let newName = user.theName;
// console.log("🚀 ~ file: main.js:643 ~ newName", newName);
// let newAge = user.theAge;
// console.log("🚀 ~ file: main.js:645 ~ newAge", newAge);
// let newTitle = user.theTitle;
// console.log("🚀 ~ file: main.js:647 ~ newTitle", newTitle);
// let newCountry = user.theCountry;
// console.log("🚀 ~ file: main.js:649 ~ newCountry", newCountry);
// Now let's Destructuring
//const { theName, theAge, theTitle, theCountry } = user; //We Could Change Those Names in next line we focus on that
//const { theName: name, theAge, theTitle, theCountry } = user; // We Can Update this object by new Values in next line we focus on that

const {
  theName: name,
  theAge,
  theTitle,
  theCountry,
  skills: { html },
} = user;
theName = "Ahmed";
console.log(`My Skills are ${html}`);
console.log("🚀 ~ file: main.js:652 ~ theCountry", theCountry);
console.log("🚀 ~ file: main.js:652 ~ theTitle", theTitle);
console.log("🚀 ~ file: main.js:652 ~ theAge", theAge);
console.log("🚀 ~ file: main.js:652 ~ newName", theName);

//Destructuring Specific element from object
const { html: skillOne, css: skillTwo } = user.skills;
console.log("🚀 ~ file: main.js:674 ~ skillTwo", skillTwo);
console.log("🚀 ~ file: main.js:674 ~ skillOne", skillOne);
*/

/* Set Data Type 
--Syntax : new set(Iterable)
--Object To Store Unique Value
--Cannot Access Element By Index

--Properties:
** Size **

--Methods:
- add
- delete
- clear
- has



let myData = [1, 1, 1, 2, 3];
let myUniqueData = new Set(myData);
let myUniqueDataSize = myUniqueData.size;
console.log("🚀 ~ file: main.js:698 ~ myUniqueData", myUniqueData); //Result => [1,2,3]
console.log("🚀 ~ file: main.js:699 ~ myUniqueDataSize", myUniqueDataSize);

myUniqueData.delete(2);
console.log("🚀 ~ file: main.js:703 ~ myUniqueData After Delete", myUniqueData);
console.log(myUniqueData.has(3)); //True
myUniqueData.clear();
console.log("🚀 ~ file: main.js:705 ~ myUniqueData after clear", myUniqueData);

*/

/* Set vs WeakSet And Garbage Collector 

Notes :
***************************************
=> Set :Can Store Any Data Values
=> Set : Has Size Property
=> Set : Has Keys , Values and Entries
=> Set : Can Use ForEach
****************************************
=> WeakSet : Collection Of Objects Only
=> WeakSet : Doesn't Have Size Property
=> WeakSet : Doesn't Have clear ,keys , values and Entries
=> WeakSet : Cannot Use ForEach
****************************************


let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
console.log("🚀 ~ file: main.js:727 ~ mySet", mySet);

console.log(`Size Of My Set is ${mySet.size}`);

let iterator = mySet.keys();
console.log("🚀 ~ file: main.js:732 ~ iterator", iterator);

let myWeakSet = new WeakSet([{ A: 1, B: 1, C: 1, D: 2, E: 3, F: "A", G: "A" }]);
console.log("🚀 ~ file: main.js:735 ~ mWeakSet", myWeakSet);
*/

/* Map Data Type Vs Object

Map Vs Object

=>Map: Doesn't Contain Key By Default
=>Map: Key Can Be anything [function,object,Any Primitive Data Types]
=>Map: ordered by Insertion
=>Map: Get Items By Size
=>Map: Can Be Directly Iterated
=>Map: Better Performance When We Add Or Remove Data


=>Object:Has Default Keys
=>Object: Key Is String Or Symbol
=>Object: Not Ordered By Insertion Untill Now
=>Object: Get Size Manually
=>Object: Not Directly Iterated And Neet To Use Object.keys()
=>Object: Low Performance When Comparing To Map




let myObj = {};
let myEmptyObj = Object.create(null); //This Create Object With Out ProtoType
let myMap = new Map();
console.log("🚀 ~ file: main.js:761 ~ myObj", myObj);
console.log("🚀 ~ file: main.js:762 ~ myEmptyObj", myEmptyObj);
console.log("🚀 ~ file: main.js:763 ~ myMap", myMap);

let myNewObj = {
  10: "Number",
  "10" :"String"
};
console.log(myNewObj[10]); //It Will Do Override and Get => String 

let myNewMap = new Map();
myNewMap.set(10,"Number");
myNewMap.set("10","string");
myNewMap.set({A:1,B:2},"Object");
console.log("🚀 ~ file: main.js:776 ~ myNewMap", myNewMap.get(10)); // Out put :Number
console.log("🚀 ~ file: main.js:776 ~ myNewMap", myNewMap.get("10")); //Out Put : string
 */

/* Array.from Method 

console.log(Array.from("Mahmoud"));
console.log(
  Array.from("12345", (n) => +n + +n) // Result will be (1+1) ,(2+2),(3+3),(4+4),(5+5))
);

let myArray = [1,1,1,2,3,4];
let spreadArray =  new Set([...myArray]);
console.log("🚀 ~ file: main.js:790 ~ spreadArray", spreadArray)
let setArray = new Set(myArray);
console.log("🚀 ~ file: main.js:790 ~ setArray", setArray)
let newArray = Array.from(setArray);
console.log("🚀 ~ file: main.js:792 ~ newArray", newArray)

function testArgs (){
  return arguments;
}
function af(){ //af => Array From
    return Array.from(arguments);
}
let newArr =af("Nabwy","AHMED","ALI",1,2,3,); 
console.log("🚀 ~ file: main.js:803 ~ newArr", newArr)

console.log(testArgs("Mahmoud","Nabwy"));
*/

/* Array.copyWithin Method

//We Use Array.copyWitin to copy element from array and paste it in the same array
let myArray = [10, 20, 30, 40, 50, "A", "B"];
console.log("🚀 ~ file: main.js:811 ~ myArray", myArray)
let copiedArray = myArray.copyWithin(3);
console.log("🚀 ~ file: main.js:813 ~ copiedArray", copiedArray)
*/

/* Array.Some Method 


//USE CASES :
// CHECK IF ELEMENT EXIST IN ARRAY
// CHECK IF NUMBER IN RANGE

let nums = [1,2,3,4,5,6,7];

let check = nums.some(function (el){

  return el >5;
})
console.log("🚀 ~ file: main.js:828 ~ check ~ check", check) //Return True 
*/

/* Array.every Method 
//All Elements Should have the condition to get true
 */

/* Function To Get Dublicated Number in Array 
const array = [3, 8, 7, 5, 3, 9, 8];
const uniqueSet = new Set(array); //{3, 8, 7, 5, 9}
console.log("🚀 ~ file: main.js:838 ~ uniqueSet", uniqueSet)

const filteredElements = array.filter((currentValue) => {
  if (uniqueSet.has(currentValue)) {
    uniqueSet.delete(currentValue);
  } else {
    return currentValue;
  }
});
console.log(filteredElements);
*/

/* Concatenate Arrays By Spread Operator 

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

let AllArrays = [...arr1, ...arr2];
console.log("🚀 ~ file: main.js:858 ~ AllArrays", AllArrays);
*/

/* Copy Array By Spread Operator 
let copiedArray = [...arr1];
console.log("🚀 ~ file: main.js:862 ~ copiedArray", copiedArray);
*/

/* Push Inide Arrays Using Spread Operators 
let allFriends = ["Ahmed", "Ali", "Mahmoud", "Mohamed"];
let thisYearFriends = ["Sameh", "Kamal"];

allFriends.push(...thisYearFriends);
console.log("🚀 ~ file: main.js:869 ~ pushedArray", allFriends);
*/

/* Use Math Object With Spread Operators 
let myNums = [10, 20, -100, 100, 1000];
console.log(Math.max(...myNums));
*/

/* Spread Operator with objects 
let obj = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
console.log({...obj,...obj2});
*/

/* Regular Expression
--Email 
-- IP
-- Phone
-- URL   
*/

//Convert String To Array
// let str1  = '10 20 100 1000 5000';

// str1.split('');
// console.log("🚀 ~ file: main.js:892 ~ str1", str1);

// [...str1];
// console.log("🚀 ~ file: main.js:898 ~ str1", str1)

// Array.from (str1);
// console.log("🚀 ~ file: main.js:901 ~ str1", str1);

// Object.assign([],str1);
// console.log("🚀 ~ file: main.js:904 ~ str1", str1)

/* OOP With JavaScript 

//OOP is style of Code.
//OOP Using Object To Design A Computer Object
//Some languages Support OOP and Some not
//Object is A Package that contains Properties and Functions

//Why we use OOP ?
//1- OOP Help us to build complex and large software Architecture in Organized Ways.
//2- You Will be able to Hide Certain Parts Of Code in your object with Encapsulation To Prevent Mess With Code.
//3- You Will be able to Create Reausable Objects To Use in Your Application Easily With Inheritance

//--Constructor Function..

class User {
  constructor(id, userName, salary) {
    this.id = id; //This goes to the object that i will create from this Constructor
    this.userName = userName || ""; //If User Not Entered User Name Return ""
    this.salary = salary > 6000 ? salary : "You're Poor"; //If salary greater than 6000 return salary else return you are poor
    this.msg = function () {
      return `Hello ${this.userName}`;
    };
  }
  //Methods
  writeMsg() {
    return `Hello ${this.userName}`;
  }
  updateUserName(newName) {
    this.userName = newName;
  }
}

let userOne = new User(100, "Mahmoud", 5000);
let userTwo = new User(101, "Hassan", 7500);
let userThree = new User(102, "Sayed", 6000);

console.log("🚀 ~ file: main.js:927 ~ userOne", userOne.id);

console.log("🚀 ~ file: main.js:927 ~ userThree", userThree.salary);

//--Deal With Properties And Methods
console.log("🚀 ~ file: main.js:927 ~ userOne", userOne.msg());
console.log("🚀 ~ file: main.js:927 ~ userTwo", userTwo.writeMsg());

//- Update Properties And Built In Constructors
userThree.updateUserName("Mohsen");
console.log("🚀 ~ file: main.js:952 ~ userThree", userThree.userName);
*/

/* Date and Time 

let currentDate = new Date();
console.log("🚀 ~ file: main.js:959 ~ currentDate", currentDate);

console.log(Date.now()); //Get Date with mSecond || 1000 Mill Second = 1 Second
//Get Seconds Count Since 1 January 1970
let seconds = Date.now() / 1000;
console.log("🚀 ~ file: main.js:964 ~ seconds", seconds);

let minutes = seconds / 60;
console.log("🚀 ~ file: main.js:967 ~ minutes", minutes);

let hours = minutes / 60;
console.log("🚀 ~ file: main.js:967 ~ hours", hours);

let days = hours / 24;
console.log("🚀 ~ file: main.js:967 ~ days", days);

let years = days / 365;
console.log("🚀 ~ file: main.js:967 ~ years", years);
*/
/* Parse And Stringify 

// JSON.parse => Convert TextData To Js Object
// JSON.stringfy => Convert Js Object To JSON

const myJsonObjectFromServer = '{"Username":"Mahmoud","age":39}';
console.log(
  "🚀 ~ file: main.js:984 ~ myJsonObjectFromServer",
  typeof myJsonObjectFromServer
); //Result : string

const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log("🚀 ~ file: main.js:990 ~ myJsObject", myJsObject);

const myJsonObject = JSON.stringify(myJsObject);
console.log("🚀 ~ file: main.js:993 ~ myJsonObject", myJsonObject);
*/
