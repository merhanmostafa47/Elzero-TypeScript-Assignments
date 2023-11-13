/**
 * لدينا ال Function التالية
قم بإصلاح ال Function حتى تعمل جميع الأمثلة الموجودة بالأسفل بدون أي مشكلة
ممنوع إستخدام ال Default Parameter Value
 */

function showMsg(user?: String, age?: (Number| String), country?: String) {
  return `${user}${age}${country}`;
}

console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));