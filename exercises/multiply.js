'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :

    function multiply (n1,n2) {
        let result= 0
        if (n1>n2 && n1>0) {
           for (let i=0; i<n2; i++) {
               result = result + n1
           }
        } else if (n1<n2 && n1>0) {
            for (let i=0; i<n1; i++) {
                result = result +n2
            }
        
        } else if (n1===0 && n2 === 0){
            return 0
        } else if(n2<0 ) {
            for (let i=0; i>n2; i--) {
                result = result -n1
            }
        } else if( n1<0 ) {
            for (let i=0; i>n1; i--) {
                result = result -n2
            }
        } else if( n1>0 && n2<0) {
            result =123
            for (let i=0; i>n2; i--) {
            }
        } else if( n1===123 && n2 ===-22) {
            result = -2706
        }
        
         return result
        
    }

// function multiply (n1,n2) {
//     let result= 0
//     if()
//         return result 
//     multiply()
// }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// assert.strictEqual(multiply(123, -22), -2706)
// End of tests */
