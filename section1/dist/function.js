function funcTest(str, int) {
    console.log(`文字は${str}、あたいは${int}です`);
}
funcTest('あああ', 123);
const arrowFuncTest = (str, int) => {
    console.log(`文字は${str}、あたいは${int}です`);
};
arrowFuncTest('いいい', 123);
// 引数 ?
const funcTestQ = (str, int) => {
    console.log(str, int);
};
funcTestQ('Qマーク');
// デフォルトパラメータ
const funcTestD = (int, str = 'aaa') => {
    console.log(str, int);
};
funcTestD(123);
// 可変長パラメータ
const eachNumber = (...items) => {
    for (const item of items) {
        console.log(item);
    }
};
eachNumber(1, 2, 3);
//# sourceMappingURL=function.js.map