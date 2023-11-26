// 基本的には使わないほうがいい

// 例1
type Member = { name: string }
const getMemberName = (string?: Member) => {
  console.log(string!.name)    //?をつけているので、あるか分からない。なので!をつけて、undefindではないよと教えてあげる
};

getMemberName({ name: '三苫' });

// 例2
let memberName!: string //null,undefindではないよ。これから入ってくるよ。と教えてあげる

const addName = (val: string) => {
  memberName = val
}
addName('浅野')

console.log(memberName)
