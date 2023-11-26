// 一般的な関数
const funcTest = (int: number) : number => {
    return int
}

console.log(funcTest(123))


// ジェネリクスを関数で使う
// 実際に使うときに使う型を指定できる
const genFunc1 = <T>(arg: T) : T => {
    return arg
}

console.log(genFunc1<number>(123))
console.log(genFunc1<string>('テスト'))
