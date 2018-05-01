"use strict"
let arr=[1,2,3,4,5,'parvez'];
arr.pop();
arr.push('pkhussain');
arr.shift();
arr.unshift('one');
arr.unshift(1);
console.log(arr);

arr.forEach(function(val){console.log('all values ' + val);});
arr.map(function(val){
 console.log("me+: " + val);

});

// Array delete method
console.log("--------------******Delete*****-------------");
let arr1 = ["I", "go", "home"];
console.log("Arr1 Before Deleting " + arr1 );
delete arr1[1]; // remove "go"
console.log( arr1[1] ); // index 1 will contain undefined
// now arr = ["I",  , "home"];
console.log("Arr1 After Deleting " + arr1 );
console.log( "Length of the array " + arr1.length ); // still arr1 lenght= 3f

console.log("--------------******SPLICE can Remove one item or range of items*****-------------");
let arr2= ["I", "Did", "JavaScript"];
console.log(`Arr2 Before splice ${arr2} and its length is ${arr2.length}`);
arr2.splice(1, 1); // from index 1 remove 1 element
//arr2.splice(1, 2); // from index 1 remove 2 element
console.log(`Arr2 After splice ${arr2} and its lenght=${arr2.length}` );

console.log("--------------******SPLICE can Remove item(s) and replace them with new item(s)*****-------------");
let arr3=["This is ","Java script","Future is on","Lets go and get it"];
console.log(`Arr3 Before splice----- ${arr3}---- and its length is -----${arr3.length}`);
let captureRemovedItems= arr3.splice(2,2," Getting Better", "and better in all areas"," of Programming")
console.log(`Arr3 After splice---- ${arr3}----- and its length is ----${arr3.length}----`);
console.log(`difference between above 2 arr3 arrays after removing --- ${captureRemovedItems} ---`);

console.log("--------------******Slice makes a sub array of item(s)*****-------------");
 let arr4=["apple","ball","cat","dog","egg","fun"];
 console.log(`Index of cat= ${arr4.indexOf('cat')}`);
 console.log(`Adding one more cat ${arr4.concat(["cat"])}`)
 console.log(`Last index of cat=${arr4.lastIndexOf('cat')} after addin one more car`);
 console.log(`Sub Array ${arr4.slice(1,3)} Ramaining Main Array = ${arr4}`);
 console.log(`Does Apple is included in this string: ${arr4.includes("apple")}`);

 console.log(`-------------*****Find and Filtter*********---------`);
 let arrobj=[{name:'apple',rate:2},{name:'mango',rate:3},{name:'banana',rate:1}];
 arrobj.find(function(item,index,arrobj){
   if(item.name=="apple"){
       
    console.log(`${item.name} found with Rate= ${item.rate}`);
   }else
   console.log(`${item.name} found with Rate= ${0}`);
 });
 let frate;
 frate = arrobj.find(item => item.name=="apple" );
 console.log(`${frate.name} found with Rate= ${frate.rate}`);

let filterrate;
filterrate=arrobj.filter(item => item.rate<3);
filterrate.forEach(function(val){console.log(`These many found < 3 rate ${val.name}`);})
//console.log(`${} found with Rate= <3 ${filterrate}`);

console.log(`-------------***** MAP one of the most useful and often used *********---------`);
//When we need to iterate over an array – we can use forEach.
//When we need to iterate and return the data for each element – we can use map.

let arr5=[1,3,5,7,9];
let arrmap=arr5.map(x=> x*2);
console.log(`map array : ${arrmap.reverse()}`);

console.log(`-------------***** SPLIT and Join *********---------`);
let names = 'pk, sk, ck';

let arr6 = names.split(', ');

for (let name of arr6) {
    console.log( `A comma seperated split to ${name}.` ); // A message to Bilbo  (and other names)
}
let t1="pkhussain@gmail.com";
console.log(`Split text with empty sting '' a.split('');  ${t1.split('')}`);
let t2=["apple","ball","cat","dog","egg","fun"];
console.log(`Join t2 array will yeild a comma seperated string ;  ${t2.join(',')}`);


