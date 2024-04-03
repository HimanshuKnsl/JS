// let name = "Himanshu "
// const roll_no = 102203088
// console.log(name + roll_no + " value");
// console.log(`my name is ${name} and my roll no is ${roll_no}`);

let heroName = new String ("himanshu")
console.log (heroName)
console.log(heroName[2])
console.log(heroName[0])
console.log(heroName.__proto__);
console.log(heroName.toUpperCase())
console.log(heroName.charAt(3))
console.log(heroName.indexOf('h'))
let string = heroName.slice(-6,4)
console.log(string)
let string2 = heroName.substring(1,4)
console.log (string2)
let string3 = "  Himanshu Kansal   "
console.log(string3)
console.log(string3.trim())
let string4 = "Himanshu##kansal"
console.log(string4)
console.log(string4.replace('##','@'))