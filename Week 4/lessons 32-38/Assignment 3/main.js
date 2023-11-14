"use strict";
/**
 * لديك مجموعة من السطور تطبع قيم في ال Console
قم بكتابة ال Class لتعمل هذه السطور بدون أي مشكلة ويخرج ال Output كما في التعليقات
 */
// Write Class Code Here
class Game {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(discount) {
        console.log(`The Discount Is ${discount}`);
    }
}
// Do Not Edit Here
let gameOne = new Game('Ys', 100);
let gameTwo = new Game(2064, 100); // There's A Game Called "2064"
console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
gameOne.getDiscount('50'); // "The Discount Is 50"
console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
gameTwo.getDiscount(80); // "The Discount Is 80"
