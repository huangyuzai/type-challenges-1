/*
* 题目要求：实现类型版本的 Array.unshift。
* */
// type Unshift<T, U> = any

// ts
type Unshift<T extends unknown[], U> = [U, ...T]
