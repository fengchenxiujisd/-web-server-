const {exec} = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `;
    if(author){
        sql +=  ` and author = '${author}'  `
    }
    if(keyword){
        sql += ` and content like '%${keyword}%'`
    }
    sql += ` order by createtime desc `

    return exec(sql)
}

const getDetail = (id) => {

}

const newBlog = (blogData = {}) => {

}

const updateBlog = (id, blogData = {}) => {

}

const deleteBlog = (id) => {

}


module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}