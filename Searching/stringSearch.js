function stringSearch(longTxt, str){
    let count = 0;
    for (let i = 0; i < longTxt.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if(longTxt[i+j] !== str[j]) break;
            if(j === str.length-1)count++;          
        }        
    }
    return count;
}

const longTxt = "This sentence has repeated text isn't?";
const str = "is";
console.log(stringSearch(longTxt, str));



