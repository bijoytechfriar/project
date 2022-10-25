// str = "catcD"
// comb=2

// const { split } = require("@apollo/client")

// let words = str.split("")
// console.log(words)
// let removed =words.filter((value,index,src) =>{
//     return src.indexOf(value)==index

// }).join('')
// console.log(removed)

// let combination = [];
// for(let i=0;i<removed.length;i++){
//     for(let j=i+1;j<removed.length+1;j++)
//     {
//         combination.push(removed.slice(i,j));
//     }
// }




// console.log(combination)

// for (let i=0;i<combination.length;i++){
//     if(combination[i].length==comb){
//         console.log(combination[i])
//     }
// }


// console.log(result)

// letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// for (var i = letters.length; i--;) {
//     for (var j = 10; j--;) console.log(letters[i]+j);
//     for (var j = 26; j--;) console.log(letters[i]+letters[j]);
// }



// for (var i = removed.length;i--;){
//     // for (var j =10;j--; ) console.log(removed[i]+j);
//     for (var j=removed.length;j--;) console.log(removed[i]+removed[j]){

//     }
// } 


str ="MAlayalam"

let word = str.split("")

console.log(word)

let b =[]

let len = word.length;

for (let i = 0;i<len;i++){
    if(b.indexOf(word[i])==-1){
        b.push(word[i]);
    }
}
console.log(b)

var list =[]
    for (var i=0;i<b.length;i++){
        for(var j =i+1;j<b.length+1;j++){
            list.push(str.slice(i,j))
        }
console.log(list)
    }