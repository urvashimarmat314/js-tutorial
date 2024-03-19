const name="urvashi";
const repono=23;
// string interpolation
console.log(`hello my name is ${name} ans my repo count is ${repono}`);

const gameName= new String('urvashi-urvi-marmat')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));
const newstring=gameName.substring(0,4);
console.log(newstring);

const anotherstring=gameName.slice(-8,4);
console.log(anotherstring);

const newstring1="    urvashi   "
console.log(newstring1.trim());
const url="https:/urvashi.com/urvi&31marmat";

console.log(url.replace('&31','$2004'));

console.log(url.includes('urvi'))
console.log(gameName.split('-'));


