"use strict"
//console.log('Hi');
let myarray = [1,2,3,4,5];
let myset = new Set(myarray);

myset.add("200");
myset.add("300");
myset.add("pk");
myset.add("200");  // this will not be accepeted as it is repeating
myset.add("300"); // this will not be accepeted as it is repeating
myset.add({a:2,b:22});
console.log("Set Size : "+myset.size);
//myset.delete('200');
console.log("Set Size : "+myset.size);
let i=0;
myset.forEach(function(parvez){
 console.log(`Set value: at index ${i} `+ parvez);
 i++;
});

// Map 
let myMap= new Map([['v1',100],['v2',200],['v3',300]]);
myMap.set('v100',1000);
 myMap.set('v101',1001);
 myMap.set('v102',1002);
//myMap.set('v100',1000);
console.log('Map Data: ' + myMap.get('v1'));
console.log('Map Data has size: ' + myMap.size);

for (let mkey of myMap.keys()) {
    console.log(mkey);
  }
  for (let mval of myMap.values()) {
    console.log(mval);
  }
  for (let mkeyval of myMap) {
    console.log(mkeyval);
  }
  myMap.forEach( (value, key, map) => {
    console.log('key value pair: '+`${key}: ${value}`); // cucumber: 500 etc
  });


// WeakMap weak set

let weakMap = new WeakMap();

let obj = {name:"Parvez"};

weakMap.set(obj,"Namepk"); // works fine (object key)
console.log('weakmap has key '+ weakMap.has(obj));
obj=null;
console.log('weakmap has key '+ weakMap.has(obj));
console.log('weakmap '+ weakMap.get(obj));