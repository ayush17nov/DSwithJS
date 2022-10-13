// Given two arrays, let the user know whether these two arrays contains common items.

const items1 = [1, 3, 4, 5]
const items2 = [2, 8, 7, 6, 3]
function hasCommonItems(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true
      }
    }
  }
  return false
}

function hasCommonItems2(arr1, arr2) {
  const itemsData = {}
  for (let i = 0; i < arr1.length; i++) {
    itemsData[arr1[i]] = true
  }
  console.log(itemsData)
  for (let j = 0; j < arr2.length; j++) {
    // if (arr2[j] in itemsData) {
    if (itemsData[arr2[j]]) {
      return true
    }
  }
  return false
}

console.log(hasCommonItems2(items1, items2))