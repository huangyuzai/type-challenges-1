/*
* 题目要求：创建一个通用的Length，接受一个readonly的数组，返回这个数组的长度。
* */
// type Length<T> = any

// js
/* function Length (array) {
    return array.length
} */

// ts
/*
* tuple 是一个定长的，类数组类型
* */
type Length<T extends readonly any[]> = T['length']
