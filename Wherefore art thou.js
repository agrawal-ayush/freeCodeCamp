/**
 * Created by ayush on 2/28/2017.
 */


function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var srcKeys = Object.keys(source);
    return collection.filter(function (obj) {
        for (var i = 0; i < srcKeys.length; i++) {
            if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
    { last: "Capulet" });

