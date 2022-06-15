/*
* 题目要求：该 Readonly 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰。
* */
// type MyReadonly<T> = any

/**
 * 解题
 * */
/* function MyReadonly(obj) {
    const result = {}
    obj.forEach(item => {
        result['readonly' + item] = obj[item]
    })
    return readonly result
} */

// ts版本
/*
* 先将 T 里面的键都取出来组成联合类型，再去遍历所有属性，并加上 readonly 关键字
* */
 type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}
