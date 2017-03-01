/**
 * Created by ayush on 3/1/2017.
 */

//
// function translatePigLatin(str) {
//     if(['a','e','i','o','u'].filter((item) => str.toLowerCase().startsWith(item)).length > 0)
//         console.log(str+"way");
//     else
//         return str;
// }
//
// translatePigLatin("algorithm");

function translatePigLatin(str) {
    // Create variables to be used
    var pigLatin = '';
    var regex = /[aeiou]/gi;

    // Check if the first character is a vowel
    if (str[0].match(regex)) {
        pigLatin = str + 'way';

    } else {

        // Find how many consonants before the first vowel.
        console.log(str.match(regex));
        var vowelIndice = str.indexOf(str.match(regex)[0]);

        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
    }

    return pigLatin;
}

// test here
translatePigLatin("consonant");

