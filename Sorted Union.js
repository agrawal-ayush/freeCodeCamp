/**
 * Created by ayush on 3/1/2017.
 */


function uniteUnique(arr) {
    var cArr = [];
    var i = 0;
    while (arguments[i]){
        cArr = cArr.concat(arguments[i]); i++;
    }
    uArray = cArr.filter(function(item, pos) {
        return cArr.indexOf(item) == pos;
    });
    return uArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
