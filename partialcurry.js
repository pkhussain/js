"use strict"
function mul(a,b)
{
    return a*b;
}

let dbl=mul.bind(null,2);
let tpl=mul.bind(null,3);
console.log(`Dubling any number ${dbl(275)}`);
console.log(`Tripling any Number ${tpl(333)}`);

console.log(`What if we’d like to fix some arguments, but not bind this? belowpartial function can do it`);
console.log(`partial function:`);

console.log("-----------------------------------------------------------------------------------------------------------------------");

function partial(func,...argsBond){
    return function (...args){
        return func.call(this,...argsBond,args)
    }

}

let user={username:"Parvez",

 say(time,chat)
 {
     console.log(`[${time}] ${this.username}:${chat}`);
 }
    };

      user.sayNow =  partial(user.say, new Date().getHours()+":"+ new Date().getMinutes());
      user.sayNow("Salam Alikum");
      console.log("\n\n");      
console.log(`**************************-------------------------*************************************************** *`);

console.log(`When using setTimeout with object methods or passing object methods along, there’s a known problem: "losing this".`);
      let user1 = {
        firstName: "Pk",
        saySalam() {
            console.log(`Salam Alikum, ${this.firstName}!`);
        }
      };
      
     setTimeout(user1.saySalam, 1000); // Salam Alikum, undefined!      
     console.log("\n\n");
     console.log(`*********The simplest solution is to use an wrapping function:*******`)

      setTimeout(function() {
        return user.saySalam(); //salam! pk
      }, 1000);

      console.log(`The simplest solution is to use an wrapping short/arrow form wrapper funstion:`)
      setTimeout(() => user.saySalam(), 1000);
       
      console.log(`*************************Immediately invoked Funstion************************`);

      (function (){
          for(let i=0;i<11;i++)
          {
              console.log(`This is from immediate call ${i}`);
          }
      })()

 


