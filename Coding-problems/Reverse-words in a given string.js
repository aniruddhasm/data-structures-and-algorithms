Given a String S, reverse the string without reversing its individual words. Words are separated by dots.
Input:
S = i.like.this.program.very.much
Output: much.very.program.this.like.i
Explanation: After reversing the whole
string(not individual words), the input
string becomes
much.very.program.this.like.i



Solution :

function reverseWords(s){
    const n = s.length;
    let result = [];
    let word = '';
    for(let i = 0; i < n; i++){
       if(s[i] === '.'){
      result.push(word);
          word = '';
        } else {
          word += s[i];
        }
    }
    if(s !== word) word += '.';
    const resLen = result.length;

    for(let j = resLen-1; j >= 0 ; j--){
        word += result[j];
        if(j !== 0){
            word += '.';
        }
    }
    return word;
}

console.log(reverseWords('i.like.this.program.very.much'))
