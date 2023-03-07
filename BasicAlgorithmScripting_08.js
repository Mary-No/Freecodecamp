function truncateString(str, num) {
 
  if (str.length === num) {
    return str.substr(0, num);
  }
  else if (str.length < num){
    return str;
  } else {
    return str.substr(0, num) + "...";
  }
}
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
