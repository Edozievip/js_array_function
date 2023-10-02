const Array1 = [15, 30, 45, 60];
const Array2 = [5, 6, 3, 10];
const arrayResult = [];

function divArray(array1, array2) {
    if (array1.length == array2.length) {
        for (let i = 0; i < array1.length; i++) {
            arrayResult.push(array1[i] / array2[i]);
          }
          return arrayResult;
    }
  
}

console.log(divArray(Array1, Array2));