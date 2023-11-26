// const input = document.getElementById('username')

const input1 = document.getElementById('username') as HTMLInputElement
input1.placeholder = '山田太郎'

const input2 = <HTMLInputElement>document.getElementById('username') as HTMLInputElement
input2.placeholder = '山田太郎'
