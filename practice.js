// function addUpTo(n) {
//   let total = 0; 
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// function addUpTo(n) {
//   return n * (n+1)/2
// }

// let t1 = performance.now()
// addUpTo(1000000000)
// let t2 = performance.now()
// console.log((t2-t1)/1000)

// addUpTo(10)

// function same(arr1, arr2) {
//   // check if length of each array is same
//   if (arr1.length === arr2.length) {
//     // if same, sort from least to greatest
//     sortedArr1 = arr1.sort((a,b) => a-b)
//     sortedArr2 = arr2.sort((a,b) => a-b)
//     for (let num1 of sortedArr1) {
//       for (let num2 of sortedArr2) {
//         if (num1**2 === num2) return true
//       }
//     }
//   } else {
//     return false
//   }
//   // nested loop, check each value equal to each other
// }

// console.log(same([1,2,3], [4,1,9]))
// console.log(same([1,2,3], [1,9]))
// console.log(same([1,2,1], [4,4,1]))

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false
//   sortedArr1 = arr1.sort((a,b) => a-b)
//   sortedArr2 = arr2.sort((a,b) => a-b)
//   return sortedArr1.every((el, idx) => el**2 === sortedArr2[idx])
//   // let newArr = []
//   // for (let num of sortedArr1) {
//   //   newArr.push(num**2)
//   // }
//   // console.log(newArr, sortedArr2)
//   // return newArr.every((el, idx) => el === sortedArr2[idx])
// }

// console.log(same([1,2,3], [4,1,9]))
// console.log(same([1,2,3], [1,9]))
// console.log(same([1,2,1], [4,4,1]))



function validAnagram(str1, str2){
  if (str1.length !== str2.length) return false
  let objStr1 = {}
  for (let letter of str1) {
    objStr1[letter] ? ++objStr1[letter] : objStr1[letter] = 1
  }

  for (let letter of str2) {
    if (!(objStr1[letter])){
      return false
    } else {
      objStr1[letter] -= 1
    }
  }
  return true
}

console.log(validAnagram('', '')) // true)
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true