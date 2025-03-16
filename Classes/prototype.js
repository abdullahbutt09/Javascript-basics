//creating a method that will convert string to uppercase

let Name = "Abdullah";

String.prototype.ConvertEvery2Word = function(){
    let HoldString = "";
    
    for (let index = 0; index < this.length; index++) {
        if(index % 2 == 1){
           HoldString += this[index].toUpperCase();
        }
        else{
            HoldString += this[index];
        }
    }
    return HoldString;
}

String.prototype.DetectUppercaseWord = function(){
    let word = this.split("");
    let store = [];

    for (let index = 0; index < this.length; index++) {
        if(word[index] === word[index].toUpperCase()){
            store.push(word[index]);
        }
    }
    return store;
}

let word = "ABullaH";
let detect = word.DetectUppercaseWord();
console.log(`UpperCase Words in string: ${word}`);

for(let i = 0; i < detect.length; i++){
    console.log(`${detect[i]}`);
}
