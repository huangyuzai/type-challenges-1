/*
* 题目要求：不使用 ReturnType 实现 TypeScript 的 ReturnType<T> 泛型。
* */
// type MyReturnType<T> = any

// ts
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : never
