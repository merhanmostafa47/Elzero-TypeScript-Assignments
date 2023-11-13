## V3

- tsc index.ts
- tsc -h
- tsc -w index.ts
- tsc --init

---

## V4

### Statically Typed Language Like [Rust, C, C++]

- Variables Types Are Static, Once You Declare It You Cannot Change
- Type Of A Variable Is Known At Compile Time "Do Type Checking At Compile-Time"
  - Have Better Performance At Run-Time Due To Not Needing To Check Types Dynamically
- Error Detected Earlier

### Dynamically Typed Language Like [PHP, Python, JavaScript]

- Variables Types Are Dynamic, You Can Always Change It
- "Type Checking At Execution-Time"
- Error Can Be Detected After Execution

---

## V8

Type Annotations With Functions

- noImplicitAny

- noImplicitReturns

  - Will Check All Code Paths In A Function To Ensure They Return A Value

- noUnusedLocals

  - Report Errors On Unused Local Variables

- noUnusedParameters
  - Report Errors On Unused Parameters In Functions.

---

## V9

Function

- Optional and Default Parameters
- In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
- "?" Optional Parameter
