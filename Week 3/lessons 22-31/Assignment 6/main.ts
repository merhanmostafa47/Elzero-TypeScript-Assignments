/**
 * لديك ال Class التالي
نريد تصليح الأخطاء وطباعة القيمة الخاصة بال Title بدون تغيير حالة ال Private الموجودة في ال Class Member
 */

class Show {
  constructor(private _title: string) {}

  get title() {
    return this._title
  }

  set title(title: string) {
    this._title = title
  }
}

let tester = new Show('Elzero')

console.log(tester.title) // Property 'title' does not exist on type 'Show'
tester.title = 'Osama' // Property 'title' does not exist on type 'Show'
console.log(tester.title) // Property 'title' does not exist on type 'Show'
