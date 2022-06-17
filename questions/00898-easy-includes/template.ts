/*
* 题目要求：在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false。
* */
// type Includes<T extends readonly any[], U> = any

// js
/* function Includes (arr, key) {
    return arr.includes(key)
} */

// 递归
/*function Includes (arr, key) {
    function _ (arr2, q) {
        if (arr2.length === 0) return false
        const [first, ...rest] = [...arr2]
        if (first === q) {
            return true
        } else {
            return  _(rest, q)
        }
    }

    return _(arr, key)
}*/


// ts

import type { Equal } from '@type-challenges/utils'

/*
* 先解构第一项，判断是否与U相等，相等则返回 true
* 不相等则递归调用
*  */
export type Includes<T extends readonly any[], U> =
    T extends [infer First, ...infer Rest] ?
        Equal<First, U> extends true ?
            true : Includes<Rest, U>
        : false
