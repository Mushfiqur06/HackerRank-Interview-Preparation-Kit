let n = 9;
let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, arr) {
  let match = {};
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (match.hasOwnProperty(arr[i])) {
      count++;
      delete match[arr[i]];
    } else {
      match[arr[i]] = 0;
    }
  }

  return count;
}

sockMerchant(n, arr);
