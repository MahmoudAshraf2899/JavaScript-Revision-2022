# JavaScript Revision

This Repository is my reference to review JavaScript from time to time

[![MIT License](https://img.shields.io/badge/JavaScript-Js-red)](https://choosealicense.com/licenses/mit/)

## Usage/Examples

```javascript
//Function To Get Dublicated Number in Array
const array = [3, 8, 7, 5, 3, 9, 8];
const uniqueSet = new Set(array); //{3, 8, 7, 5, 9}
console.log("🚀 ~ file: main.js:838 ~ uniqueSet", uniqueSet);

const filteredElements = array.filter((currentValue) => {
  if (uniqueSet.has(currentValue)) {
    uniqueSet.delete(currentValue);
  } else {
    return currentValue;
  }
});
console.log(filteredElements);

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
```

## Support

For support, email mahmodashrf79@gmail.com

## 🚀 About Me

I'm a full stack developer (Asp.Net Core & React Js) at Procoor company for Construction Management Software...
