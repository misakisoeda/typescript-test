interface MemberInterface {
    name: string,
    age: number
}

const memberI: MemberInterface = {
    name: 'タイソン',
    age: 19
}

interface HobbyInterface {
    hobby: string
}

interface ProfileInterface extends MemberInterface, HobbyInterface {}

const memberInfoI: ProfileInterface = {
    name: '山崎',
    age: 24,
    hobby: '野球'
}

console.log(memberInfoI.age);
