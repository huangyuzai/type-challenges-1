/*
* 题目要求：
*  假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。
*  在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
*  比如：Promise<ExampleType>，请你返回 ExampleType 类型。
* */
// type MyAwaited = any

// ts
/*
* 1.判断传进来的 T 是否为 Promise 类型
* 2.定义一个类型变量 X 接收 Promise 的类型
* 3.如果 Promise 嵌套，则递归获取类型
* 4.如果不是，则直接返回类型变量 X
* */
type MyAwaited<T extends Promise<unknown>> =
    T extends Promise<infer X> ?
        X extends Promise<unknown> ?
            MyAwaited<X> : X
        : never
