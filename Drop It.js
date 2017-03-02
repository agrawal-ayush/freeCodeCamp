/**
 * Created by ayush on 3/3/2017.
 */

function dropElements(arr, func) {
    // Drop them elements.

    newArr = arr.map(func);

    index = newArr.indexOf(true);

    if(index == -1)
        return [];

    for(var i = 0; i < index ; i++){
        arr.shift();
    }
    return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
