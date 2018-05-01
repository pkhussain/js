"use strict"
function  Vehical( wheels)
{
    this.wheeler=wheels;

}
Vehical.prototype.seats=6;
let car =new Vehical(4);
console.log(car.wheeler);
