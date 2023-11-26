// 一般的な関数
const funcTest = (int) => {
    return int;
};
console.log(funcTest(123));
// ジェネリクスを関数で使う
// 実際に使うときに使う型を指定できる
const genFunc1 = (arg) => {
    return arg;
};
console.log(genFunc1(123));
console.log(genFunc1('テスト'));
//# sourceMappingURL=genericsFunc.js.map