/**
 * Created by ayush on 3/2/2017.
 */


function sumPrimes(num) {
    var arr = [];
    for(var i = 2; i <= num ; i++){
        var count = 0;

        for(var j = 1; j <= i/2 ; j++){
            if(i%j == 0){
                count++;
            }


            if(count > 1)
                break;

        }

        if(count == 1)
            arr.push(i);
    }

    var sum = arr.reduce(function(acc,val){
        return acc +=val;
    },0);

    return sum;

}

sumPrimes(10);
