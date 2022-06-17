/*
* 题目要求：实现一个 IF 类型，它接收一个条件类型 C ，一个判断为真时的返回类型 T ，以及一个判断为假时的返回类型 F。 C 只能是 true 或者 false， T 和 F 可以是任意类型。
* */
// type If<C, T, F> = any

//js
/* function If(c, t, f) {
    if (typeof c !== "boolean") return
    return c ? t : f
} */

// ts
/*
* 这里会有兼容性问题，在 非严格 模式下，null extends boolean 会认为是 true
* - https://www.typescriptlang.org/docs/handbook/type-compatibility.html#advanced-topics
* */
type If<C extends boolean, T, F> = C extends true ? T : F
