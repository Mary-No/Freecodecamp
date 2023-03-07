function frankenSplice(arr1, arr2, n) {
  let clon_arr2 = arr2.slice(0);
  let clon_arr2_1 = clon_arr2.slice(0, n);
  let clon_arr2_2 = clon_arr2.slice(n);
  let result = clon_arr2_1.concat(arr1).concat(clon_arr2_2);
  console.log(result);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
