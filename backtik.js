"use strict"
let name="Momra".toUpperCase();
function uc(sst){
    return sst.toUpperCase();
}
console.log(`${uc('salam alikum')} Are you at ${name}`);

// console.log(name.start)

console.log(name.startsWith('M'));


console.log(name.endsWith('RA'));
console.log(name.includes("OM"));
console.log("infinity test: " + Number.isFinite(0/10));
console.log("Is Integer:" + Number.isInteger(5.0)); //false

//-------- Default param

function hipk($greet="Salam Alikum")
{
    console.log("Default Parameters: " + $greet);
}
hipk("Hello Parvez");

// Spread Operator

let args1=[1,2,3];
let args2=[4,5,6];
 function test()
 {
     console.log("spread operator: " +args1+','+args2);
 }
 test(...args1,...args2);

 //Set, Map, WeakSet and WeakMap


