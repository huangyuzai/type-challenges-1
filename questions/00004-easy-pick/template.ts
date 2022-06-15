/*
* 原题目
* 题目要求：
* 实现 TS 内置的 Pick<T, K>，但不可以使用它。
* 从类型 T 中选择出属性 K，构造成一个新的类型。
* */
// type MyPick<T, K> = any

/*
* 解题
* */

// js版本
/* function MyPick (todo, keys) {
    // 结果集合
    const result = {}
    // 遍历 keys
    keys.foreach((item) => {
        // 判断 todo 中是否存在该属性
        if (item in todo) {
            // 取出 todo 里面的值赋值给结果集
            result[item] = todo[item]
        }
    })
    // 返回对象
    return result
} */

// ts版本
/*
* 遍历联合类型语法 [P in K]
* 泛型：类型变量
* extends:
*  - 在泛型里表示 约束
*  - https://www.typescriptlang.org/docs/handbook/mixins.html#constraints
* keyof
*  - 获取 T 类型的所有键，返回类型是联合类型
*
* 遍历 mapped：https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
* 取值 indexed：https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html?#handbook-content
*
* 例：
* // 约束传进来的 key 必须是 obj 对象里面存在的属性
* function prop<T extends object, K extends keyof T>(obj: T, key: K) {
*   return obj[key]
* }
* */
// 约束传进来的 K 必须是 T 里面存在的子类型
type MyPick<T, K extends keyof T> = {
   [P in K]: T[P]
}
