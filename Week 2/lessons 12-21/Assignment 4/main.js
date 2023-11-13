"use strict";
/**
 * لديك ال Function التالية مليئة بالأخطاء
المطلوب إصلاح الأخطاء حتى تظهر النتائج كما في التعليق داخل ال Console
يمكنك الإلغاء والتعديل على ال Function كما تريد
 */
function yesOrNo(val) {
    if (typeof val == 'number') {
        if (val > 10) {
            return true;
        }
        else {
            return false;
        }
    }
    else
        return 'Error';
}
// Do Not Edit Here
console.log(yesOrNo('100')); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
