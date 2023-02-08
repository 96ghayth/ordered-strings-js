const fs = require('fs');
// Ouvrir le fichier en lecture seule
data = fs.readFileSync('file.txt', 'utf8') 
const content = data;
//console.log( data); 
const number=content.split(/\r?\n/);

console.log( typeof number);

let ar = number
console.log(ar);
console.log("start", ar)
let res = ar.sort((a,b) => {
  if(a[0] === b[0]) {
    const l = a.length


    if (a[l-1] === b[l-1]) {
      return  a.slice(1, l-1) > b.slice(1, l-1)?0 : -1//return 0 else return -1 :a become before b.
    }

    return a[l-1] > b[l-1]?0 : -1
  }
  return  a[0] > b[0]?0 : -1 //ternary expression
  
})
console.log("finish", res);
let text = res.join('\n');
fs.writeFileSync('modified.txt', text, "utf8");
