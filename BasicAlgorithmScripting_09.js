function findElement(arr, func) {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        flag = true;
        return arr[i];
        break;
      }
    }
    if (!flag) {
      return undefined;
    }
  
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);