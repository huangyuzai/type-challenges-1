/*
* 题目要求：实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。
* */
// type First<T extends any[]> = any

// js版本
/* function First(array) {
   // 解法一
    return array[0]
    // 通过判断是否数组长度是否为 0
    return array.length === 0 ? never : array[0]
} */

// ts版本
// 解法一 ， 判断是否为空数组，空数组返回 never
type First<T extends any[]> = T extends [] ? never : T[0]

// 解法二，判断数组长度是否为0，0则返回never
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 解法三，通过 extends union 判断
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// 解法四 通过 infer 实现
/*
* infer
*  - 声明一个待推断的类型变量
*  - 只能用于 extends 语句中
* */
// type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never

