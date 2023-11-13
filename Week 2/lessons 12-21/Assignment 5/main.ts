/**
 * لديك ال Function التالية مليئة بالأخطاء
المطلوب إصلاح الأخطاء حتى تظهر النتائج كما في التعليق داخل ال Console
يمكنك الإلغاء والتعديل على ال Function كما تريد ما عدا إلغاء كلمة custom
 */

function isHeOld(age: number): String | 'Error' {
  if (typeof age == 'number') {
    if (age > 40) {
      return 'Yes'
    } else {
      return 'No'
    }
  } else return 'Error'
}

// Do Not Edit Here
console.log(isHeOld('100')) // Error
console.log(isHeOld(45)) // "Yes"
console.log(isHeOld(30)) // "No"
