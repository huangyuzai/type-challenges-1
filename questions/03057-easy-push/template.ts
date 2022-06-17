/*
* 题目要求：在类型系统里实现通用的 Array.push 。
* */
// type Push<T, U> = any

// js
/* function Push (arr, key) {
    return [...arr, key]
} */

// ts
type Push<T extends unknown[], U> = [...T, U]
