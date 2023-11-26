type GenObject<T,U> = {
    name: string,
    age: number,
    memo: T,
    value: U
}

const engineerMember: GenObject<string, number> = {
    name: '添田',
    age: 34,
    memo: 'フロントエンド極めるぞ',
    value: 2024
}

const basketMember: GenObject<number, string> = {
    name: '桜木',
    age: 17,
    memo: 2022,
    value: 'スラダン最高'
}
