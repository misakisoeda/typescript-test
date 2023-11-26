type ObjectInArray1 = {
    id: number,
    name: string,
    hobby: string
}[]

type ObjectInArray2 = {
    [key: string] : string | number
}[]

const members : ObjectInArray1 = [
    {
        id: 1,
        name: '添田',
        hobby: 'ボクシング'
    }, {
        id: 2,
        name: '前田',
        hobby: 'ボクシング'
    }
]

for (const member of members) {
    console.log(`id: ${member.id}, name: ${member.name}`)
}
