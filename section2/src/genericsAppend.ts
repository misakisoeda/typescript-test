type GenObjectE<T extends number | string> = {  //numberかstringが使える
    sample: T
}

const testObjE: GenObjectE<number> = {
    sample: 1243
}


type GenObjectD<T = string> = {  //何も書かなければstring
    sample: T
}

// const testObjD: GenObjectD = {
//     sample: 'あああ'
// }
const testObjD: GenObjectD<number> = {
    sample: 123
}
