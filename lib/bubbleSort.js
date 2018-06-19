const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
     if (arr[i] > arr[i + 1]) {
      let bubble = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = bubble;
    }
  }
}

const totalSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    bubbleSort(arr);
  }
}

module.exports = bubbleSort
module.exports = totalSort
