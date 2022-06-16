/*
* 题目要求：实现内置的Exclude <T, U>类型，但不能直接使用它本身。
* - 从联合类型T中排除U的类型成员，来构造一个新的类型
* */
// type MyExclude<T, U> = any

// js
/* function MyExclude(t,u) {
    return t.filter(i => !u.includes(i))
} */

// ts
/*
* 例：
* T = [1, 2, 3]
* U = [1]
* extends 会循环两个类型，对比顺序 => 1 - 1  2 - 1  3 - 1
* 所以 1 - 1 时会返回 nerve，其他会单独返回原属于 T 中的类型成员
* */
type MyExclude<T, U> = T extends U ? never : T
