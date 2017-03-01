/**
 * Created by ayush on 3/2/2017.
 */


function convertHTML(str) {
    // &colon;&rpar;
    str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
    return str;
}

convertHTML("Dolce & Gabbana");

