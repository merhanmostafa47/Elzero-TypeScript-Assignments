/**
 * لدينا ال Array التالية ومحدد فيها ال Type Annotations
المطلوب تحديث قيمة ال Array وإضافة أي بيانات عشوائية فيها بدون ظهور اي أخطاء
 */

let arr: (number | boolean[] | (string | (string | number)[])[])[] = [
  1,
  [true, false],
  ['10', '20', ['30', 40, 50]],
];
