// import UserType from './moduleExport' //←default付けてないのでエラーになる
import {UserType , BlogType as Blog} from './moduleExport'  //as Blogは、BlogTypeをローカルスコープでBlogとして使用出来るように

import User from './moduleExportD'

const user: UserType = {
    id: 1,
    name: '柴崎'
}

console.log(user.name)


const blog: Blog = {
    id: 1,
    name: 'テスト統合'
}

console.log(blog.name)


const user2: User = {
    id: 1,
    name: '山田'
}

console.log(user2.name)


// $ node dist/moduleImport.js
