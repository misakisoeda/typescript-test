type MemberType = {
    name: string,
    age: number
}

const memberT: MemberType = {
    name: 'ドラ',
    age: 22
}

type MemberHobby = {
    hobby: string
}

type MemberProfile = MemberType & MemberHobby

const memberInfo: MemberProfile = {
    name: 'クロネコ',
    age: 10,
    hobby: '寝ること'
}

console.log(memberInfo.hobby)
