/*
* 题目要求：在类型系统里实现 JavaScript 内置的 Array.concat 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。
* */
// type Concat<T, U> = any

// js
/* function Concat (T, U) {
    return [...T, ...U]
} */

// ts
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

/*
* 作业：
*  - first -> 取出数组里面的第一个元素
*  - tail -> 取出数组中的最后一个元素
* */
/*type First<T extends unknown[]> = T extends [infer First, ...infer Rest] ? First : never

type r = First<[1, 2, 3]>*/
