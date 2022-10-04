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



// function validAnagram(str1, str2){
//   if (str1.length !== str2.length) return false
//   let objStr1 = {}
//   for (let letter of str1) {
//     objStr1[letter] ? ++objStr1[letter] : objStr1[letter] = 1
//   }

//   for (let letter of str2) {
//     if (!(objStr1[letter])){
//       return false
//     } else {
//       objStr1[letter] -= 1
//     }
//   }
//   return true
// }

// console.log(validAnagram('', '')) // true)
// console.log(validAnagram('aaz', 'zza')) // false
// console.log(validAnagram('anagram', 'nagaram')) // true
// console.log(validAnagram("rat","car")) // false) // false
// console.log(validAnagram('awesome', 'awesom')) // false
// console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
// console.log(validAnagram('qwerty', 'qeywrt')) // true
// console.log(validAnagram('texttwisttime', 'timetwisttext')) // true

// function countUniqueValues(arr) {
//   let uniqueValues = 0
//   if (arr.length === 0) return 0
//   for (let i=0; i<arr.length; i++) {
//     if (arr[i] !== arr[i+1]) uniqueValues += 1
//   }
//   return uniqueValues
// }
// console.log(countUniqueValues([1,1,1,1,1,2]))
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
// console.log(countUniqueValues([]))
// console.log(countUniqueValues([-2,-1,-1,0,1]))

// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;
 
//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then 
// 		// move the window to right
//     if(total < sum && end < nums.length){
//       total += nums[end];
// 			end++;
//     }
//     // if current window adds up to at least the sum given then
// 		// we can shrink the window 
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
// 			total -= nums[start];
// 			start++;
//     } 
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
//     else {
//       break;
//     }
//   }
 
//   return minLen === Infinity ? 0 : minLen;
// }

// function linearSearch(arr, val) {
//   for (let i=0; i<arr.length;i++) {
//     if (arr[i] === val) return i
//   }
//   return -1
// }

// function bubbleSort(arr) {
//   let noSwaps
//   for (let i = arr.length; i > 0; i--) {
//     noSwaps = true
//     for (let j = 0; j < i-1; j++) {
//       console.log(arr, arr[j], arr[j+1])
//       if (arr[j] > arr[j+1]) {
//         //SWAP!
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//         noSwaps = false
//       }
//     }
//     if (noSwaps) break
//   }
//   console.log(arr)
//   return arr
// }

// bubbleSort([37, 45, 29, 8, 12, 88, -3])

// function selectionSort(arr) {
//   for (let i = 0; i<arr.length; i++) {
//     let lowest = i
//     for (let j = i+1; j<arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j
//       }
//     }
//     if (i !== lowest) {
//       let temp = arr[i]
//       arr[i] = arr[lowest]
//       arr[lowest] = temp
//     }
//   }
//   console.log(arr)
//   return arr
// }

// selectionSort([34, 22, 10, 19, 17])

// function selectionSort(arr) {
//   const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[lowest] > arr[j]) {
//         lowest = j
//       }
//     }
//     if (i !== lowest) swap(arr, i, lowest)
//   }
//   console.log(arr)
//   return arr
// }

// selectionSort([34, 22, 10, 19, 17])

// function insertionSort(arr) {
//   for (let i = 1; i< arr.length; i++){
//     let current = arr[i];
//     for(let j = i-1; j >=0 && arr[j] > current; j--){
//       arr[j+1] = arr[j];      
//       arr[j] = current;
//     }
//   }
//   console.log(arr)
//   return arr;
// }

// insertionSort([2,1,9,76,4])

function merge(arr1, arr2) {
  let results = []
  let i = 0
  let j = 0
  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length) {0
    results.push(arr2[j])
    j++
  }
  console.log(results)
  return results
}

function mergeSort(arr){
  if(arr.length <= 1) return arr
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

mergeSort([10,24,76,73])