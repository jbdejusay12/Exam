function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
     
      let temp = arr[i]; //list of array
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
    }
   // return arr;
  }
  
  const myArray = [5, 3, 8, 4, 2];
  console.log(insertionSort(myArray));


  //Note : I am using here a insertion sort