//// reverse a number /////
const reverseNumber = (num) => {
  num = num + "";
  return num.split("").reverse().join("");
};
console.log("Reversed Number: " + reverseNumber(3190912312));

//// palindrome without reverse() ////
const isPalindrome = (str) => {
  const length = str.length;
  let lowCaseStr = str.toLowerCase();

  for (let i = 0; i < length / 2; i++) {
    if (lowCaseStr[i] !== lowCaseStr[length - 1 - i]) {
      return "It's not a palindrome";
    }
  }
  return "It's a palindrome";
};
console.log(isPalindrome("Madam"));
console.log(isPalindrome("semih"));
console.log(isPalindrome("KaZak"));

///// palindrome without for loop and reverse() ////
const isPalindrome2 = (str) => {
  let isFalse = true;
  const strArr = str.toLowerCase().split("");

  strArr.forEach((letter, index) => {
    if (letter !== strArr[strArr.length - index - 1]) {
      isFalse = false;
    }
  });
  return isFalse;
};
console.log("is Palindrome = " + isPalindrome2("kazak"));
console.log("is Palindrome = " + isPalindrome2("semih"));
console.log("is Palindrome = " + isPalindrome2("kazak"));

/////  biggest in array //////
const biggestInArray = (arr) => {
  let biggestNum = numArr[0];
  numArr.array.forEach(
    (number) => (biggestNum = number > biggestNum ? number : biggestNum)
  );
  return biggestNum;
};
console.log("Largest in array = " + biggestInArray([2, 5, 86, 10, 1, 34]));

///// find longest String ////
const getLongestWord = (strArray) => {
  let word = "";
  const arr = strArray.split(" ");
  arr.forEach((string) => {
    if (string.length > word.length) {
      word = string;
    }
  });
  return word;
};
console.log(
  "Longest word = " + getLongestWord("Bebegim oldun daha ilk gunden")
);

/////// is Array /////////
const isArrayFunc = (arr) => {
  return Array.isArray(arr);
};

console.log("is Array = " + isArrayFunc([3, 5, 1, 2, "semih"]));

//////// bigger to smaller ////////

const biggestToSmallest = (array) => {
  let newArr = [];
  arr.forEach(() => {
    let max = arr[0];
    let indexTemp = 0;
    arr.forEach((element2, index2) => {
      if (element2 > max) {
        max = element2;
        indexTemp = index2;
      }
    });
    newArr.push(max);
    array[indexTemp] = Number.NEGATIVE_INFINITY;
  });
  return newArr;
};
const arr = [123, 3, 655, 1, 3];
console.log(biggestToSmallest(arr));
