/**
 * Created by ayush on 3/2/2017.
 */


function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    return str.split(/(?=[A-Z])/).join("-");




}

spinalCase('thisIsSpinalTap');

