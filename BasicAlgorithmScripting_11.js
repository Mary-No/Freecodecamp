function titleCase(str) {
  let arr_words = str.split(" ");
  for (let i = 0; i < arr_words.length; i++) {
    arr_words[i] = arr_words[i].slice(0, 1).toUpperCase() + arr_words[i].slice(1).toLowerCase();
  }
  console.log(arr_words.join(' '));
}

titleCase("I'm a little tea pot");
