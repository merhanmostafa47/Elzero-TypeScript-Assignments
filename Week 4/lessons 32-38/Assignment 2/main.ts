/**
 * 
 * لديك مجموعة من السطور تطبع قيم في ال Console
قم بكتابة ال Function لتعمل هذه السطور بدون أي مشكلة ويخرج ال Output كما في التعليقات
 */

// Write Function Code Here
function showTypes<T, T1 = void, T2 = void>(
  val?: T,
  val2?: T1,
  val3?: T2
): string {
  return `${val ? val : 'Nothing'} - ${val2 ? val2 : 'Nothing'} - ${
    val3 ? val3 : 'Nothing'
  }`
}

// Do Not Edit Here
console.log(showTypes()) // Nothing - Nothing - Nothing
console.log(showTypes<string>('String')) // String - Nothing - Nothing
console.log(showTypes<string, number>('String', 100)) // String - 100 - Nothing
console.log(showTypes<string, number, boolean>('String', 100, true)) // String - 100 - true