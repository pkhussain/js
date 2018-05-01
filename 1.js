"use strict"
class User{

    constructor(uname,dept)
    {
        let gname;
        this.username=uname;
        this.department=dept;
        gname=this.username + ' ' + this.department;
    }
    register()
    {
        console.log(this.username + " is Added to " +this.department);
    }

}
let obj =new User("Pkhussain","IOT");
obj.department="DS";
obj.gname="ggggg";
obj.register();
console.log("------------------------------------------------------------");
class Gym extends User{

    constructor(uname,dept,gymname)
    {
      super(uname,dept);
      this.gymname=gymname;
    }
    getGym()
    {
        console.log(this.username+" Has joined this gym "+ this.gymname)
    }
    

}

let oGym=new Gym("parvez","Weightlost","CC");
oGym.getGym();

