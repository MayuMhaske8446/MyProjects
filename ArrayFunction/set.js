let letters = new Set(["a", "b", "c"]);
const myIterator = letters.values();
let text = "";
for (const entry of myIterator){
    text += entry;
}
console.log(text);
console.log(typeof(letters));
letters instanceof Set;

