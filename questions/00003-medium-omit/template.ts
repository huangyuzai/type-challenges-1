/*
* 题目要求：
* 不使用 Omit 实现 TypeScript 的 Omit<T, K> 泛型。
* Omit 会创建一个省略 K 中字段的 T 对象。
* */
// type MyOmit<T, K> = any

// js
/* function MyOmit(obj, arr) {
    // 结果集
    const result = {}
    // 循环需要忽略的参数
    arr.forEach(item => {
        if (!(item in obj)) return
        // 循环已有参数
        Object.keys(obj).map(item2 => {
            // 如果 key 值不包含，则添加到结果集
            if (item !== item2) {
                result[item2] = obj[item2]
            }
        })
    })
    return result
} */

// ts
/*
* 通过 as 实现键名重映射
* 这里利用 Exclude 返回一个 never 过滤掉 K 中的属性
* Exclude
*  - type Exclude<T, U> = T extends U ? never : T
*  - 作用：如果 T 是 U 的子类型则返回 never 不是则返回 T
*
* 1.遍历 T 中的属性键名
* 2.通过 as 重新映射，然后判断 T 中的某个类名是否属于 K，属于会返回 nerve
* 3.never会过滤掉该属性
* */
type MyOmit<T, K extends keyof T> = {
    [P in keyof T as Exclude<P, K>]: T[P]
}
