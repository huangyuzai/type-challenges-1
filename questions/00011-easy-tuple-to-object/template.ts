/*
* 题目要求：传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。
* */
// type TupleToObject<T extends readonly any[]> = any

/*
* 解题
* */

// js版本
/* function TupleToObject(tuple) {
    const result = {}
    tuple.forEach(item => {
        result[item] = item
    })
    return result
} */


/*
* typeof - 用来获取一个变量或对象的类型
*
* as const - 将类型断言为 字面量类型，表示该变量不可更改
*
* keyof array 得到的是数组的索引 0 1 2 3
*
* 遍历数组类型需要使用 T[number]
* */
// ts版本
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]: P
}
