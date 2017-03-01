/**
 * Created by ayush on 3/1/2017.
 */

function fearNotLetter(str) {
    var firstChar = str.charCodeAt(0);
    for(var i = 1; i < str.length ; i++) {
        if (str.charCodeAt(i) == ++firstChar) {
            continue;
        }
        else
            return String.fromCharCode(firstChar);
    }
}

fearNotLetter("abce");
