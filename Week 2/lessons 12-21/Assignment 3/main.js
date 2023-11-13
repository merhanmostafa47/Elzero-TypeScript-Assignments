"use strict";
/**
 * إستخدم ما تعلمته لتجعل هذا ال Code سليم بدون التعديل عليه
يمكنك كتابة ما تريد قبل ال Code
يجب عليك عمل Extend من ال Type ولا تعيد إستخدام الخواص مرة أخرى
 */
// Do Not Edit Here
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: 'Elzero', theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: 'Elzero', theAge: 4, country: 'Egypt' }));
