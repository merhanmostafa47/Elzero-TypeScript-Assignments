"use strict";
/**
 * لدينا ال Function التالية
إستخدم المتغيرات المتاحة مكان علامات الإستفهام لتخرج بالنتيجة المطلوبة
ممنوع كتابة أي شيء خارج المتغيرات المتاحة
 */
let nothing;
let theName = "Elzero";
function showMyDetails(a = "", b = "", c) {
    return `${a}${b}${c}`;
}
// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing, nothing, theName)); // Elzero
