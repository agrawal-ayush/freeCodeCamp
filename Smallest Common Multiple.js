/**
 * Created by ayush on 3/2/2017.
 */


function smallestCommons(arr) {
    var newArr = [];
    for (var i = Math.max(...arr); i >= Math.min(...arr); i--) {
        newArr.push(i);
    }

    var quot = 0;
    var loop = 1;
    var n;

    // Run code while n is not the same as the array length.
    do {
        quot = newArr[0] * loop * newArr[1];
        for (n = 2; n < newArr.length; n++) {
            if (quot % newArr[n] !== 0) {
                break;
            }
        }

        loop++;
    } while (n !== newArr.length);

    return quot;
}


smallestCommons([1,5]);