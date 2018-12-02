// Reverse a string

function reverseString(str) {
  let strArray = [];
  for (let i = 0; i < str.length; i++) {
    strArray.unshift(str[i]);
  }
  str = strArray.join("");
  return str;
}

reverseString("hello");

///// Find the longest word in str

function findLongestWordLength(str) {
  let arr = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord) {
      longestWord = arr[i].length;
    }
  }
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Factorialize a number
function factorialize(num) {
  let result = 1;
  for (let i = 1; i < num; i++) {
    result *= i + 1;
  }
  return result;
}
factorialize(5);

// Repeat after me
function repeatStringNumTimes(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

repeatStringNumTimes("abc", 3);

// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      // Si la fonction donne bien le résultat obtenu (ici 0)
      return arr[i];
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

booWho(null);

// Remove all falsy values from an array.

function bouncer(arr) {
  return arr.filter(Boolean);
}

//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  let compare = arr[1];
  let model = arr[0];
  let modelArray = new Array();
  let isItTrue = new Array();
  let result;

  for (let i = 0; i < model.length; i++) {
    modelArray.push(model[i].toLowerCase());
  }

  for (let i = 0; i < compare.length; i++) {
    if (modelArray.includes(compare[i].toLowerCase())) {
      isItTrue.push("1");
    } else {
      isItTrue.push("2");
    }
  }
  if (isItTrue.includes("2")) {
    result = false;
  } else {
    result = true;
  }
  return result;
}
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);

// Palindrome checker
function palindrome(str) {
  let myArr = new Array();
  let myReversedArr = new Array();
  let result;
  str = str.replace(/[^A-Za-z0-9]/g, "");
  for (let i = 0; i < str.length; i++) {
    myArr.push(str[i].toLowerCase());
  }
  myReversedArr = [...myArr].reverse();
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] === myReversedArr[i]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
}

// Capitalize a sentance
function titleCase(str) {
  str = str.toLowerCase(); // On passe toute la phrase en minuscule
  str = str.split(" "); // On divise la phrase entre chaque espace pour récupérer chaque mot
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); // On remplace le premier caractère par celui en majuscule
  }
  return str.join(" "); // On joint le tableau avec un espace
}

titleCase("I'm a little tea pot");

//

let count = 0;

function cc(card) {
  let result;
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (count > 0) {
    result = count + " Bet";
  } else {
    result = count + " Hold";
  }

  return result;
  // Only change code above this line
}
cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

//

// Setup
function phoneticLookup(index) {
  let result;
  let obj = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };
  result = obj[index];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");

//

// Setup

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half({ max, min }) {
    // use function argument destructuring
    return (max + min) / 2.0;
  };
  // change code above this line
})();

//

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  let result = "";
  let resultDisplayArray = new Array();
  // change code below this line
  for (let i = 0; i < arr.length; i++) {
    result = `<li class='text-warning'>${arr[i]}</li>`;
    resultDisplayArray.push(result);
  } // change code above this line
  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
//

function rot13(str) {
  // LBH QVQ VG!
  let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  let formattedWord = new Array();
  let j;
  for (let i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) == -1) {
      formattedWord.push(str[i]);
    } else {
      j = alphabet.indexOf(str[i]);
      j += 13;

      if (j >= 26) {
        j -= 26;
      }
      formattedWord.push(alphabet[j]);
    }
  }

  return formattedWord.join("");
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");

////

// Setup
//Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  }
];

ROYAUME;

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    console.log(prop);
    if (
      (contacts[i].firstName == name && contacts[i][prop] != null) ||
      contacts[i][prop] != undefined
    ) {
      console.log(contacts[i][prop]);
    } else if (contacts[i].firstName !== name) {
      console.log("No such contact");
    } else {
      console.log("No such property");
    }
  }
  // Only change code above this line
}

// Change these values to test your function
lookUpProfile("Bob", "number");
