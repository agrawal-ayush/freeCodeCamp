/**
 * Created by ayush on 3/1/2017.
 */


function pairElement(str) {
    var objVal = {
        "A" : "T",
        "T" : "A",
        "C" : "G",
        "G" : "C"
    }

    var arr = [];

    for(var i = 0; i < str.length ; i++){
        var obj = [];
        obj.push(str.charAt(i));
        obj.push(objVal[str.charAt(i)]);

        arr.push(obj);
    }
    return arr;
}

pairElement("GCG");

