a = ["a", "b", "c", "d", "e", "f"];
b = ["1", "2", "3"];
c = 2;
//Output: d = [“a”, “b”, “1”, “c”, “d”, “2”, “e”, “f”, “3”]

let d = [];
let count = 0;
for (let i = 1; i < a.length+1; i++) {
	d.push(a[i-1]);
	if(i%c === 0 && b[count]){
		d.push(b[count]);
		count++;
	}	
}

console.log(d);