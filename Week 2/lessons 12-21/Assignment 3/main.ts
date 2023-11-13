/**
 * إستخدم ما تعلمته لتجعل هذا ال Code سليم بدون التعديل عليه
يمكنك كتابة ما تريد قبل ال Code
يجب عليك عمل Extend من ال Type ولا تعيد إستخدام الخواص مرة أخرى
 */

// Write Your Code Here
type Info = {
  theName: String
  theAge: Number
}

type Full = Info & {
  country: String
}
// Do Not Edit Here
function showInfo(data: Info) {
  console.log(`The Name Is ${data.theName}`)
  console.log(`The Age Is ${data.theAge}`)
}
console.log(showInfo({ theName: 'Elzero', theAge: 40 }))

function showFullInfo(data: Full) {
  console.log(`The Name Is ${data.theName}`)
  console.log(`The Age Is ${data.theAge}`)
  console.log(`The Country Is ${data.country}`)
}
console.log(showFullInfo({ theName: 'Elzero', theAge: 4, country: 'Egypt' }))
