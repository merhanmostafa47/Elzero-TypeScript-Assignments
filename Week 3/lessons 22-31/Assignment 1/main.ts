/**
 * لدينا Interface بإسم Member يمكنك التعديل عليه كما تريد
قم بالتعديل على ال Interface لتنتهي رسائل الخطأ الموجودة في ال Object بالأسفل
ممنوع التعديل عى ال Object ولا السطور الموجودة تحته
لديك 4 أخطاء كل واحد فيه التعليق الذي يعبر عنه
 */

// Edit The Interface To Fix The Problems
interface Member {
  id: number | string
  username: string
  country?: string
  state: boolean
  getName(): string
}

// Do Not Edit The Code Below
let user: Member = {
  // Property 'country' is missing in type
  id: 100,
  username: 'Elzero',
  state: true,
  getName() {
    // 'getName' does not exist in type 'Member'
    return this.username
  },
}

user.id = 200
user.id = '200' // Type 'string' is not assignable to type 'number'
user.state = false // Cannot assign to 'state' because it is a read-only property
