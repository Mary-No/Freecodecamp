function reverseString(str) {
  let strArr = str.split("").reverse().join('');
  console.log(strArr);
  return strArr;
}

reverseString("hello");
