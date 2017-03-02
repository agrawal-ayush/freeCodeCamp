/**
 * Created by ayush on 3/3/2017.
 */


function findElement(arr, func) {

    newArr = arr.filter(func);


    return newArr[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

