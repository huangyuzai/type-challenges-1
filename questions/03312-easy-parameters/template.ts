/*
* 题目要求：实现内置的 Parameters 类型，而不是直接使用它
* - 获取参数的类型
* */
// type MyParameters<T extends (...args: any[]) => any> = any

// ts
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never
