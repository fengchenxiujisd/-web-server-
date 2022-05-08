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
    let sql = `select * from blogs where id = '${id}'`
    return exec(sql).then(row=>{
        return row[0];
    })
}

const newBlog = (blogData = {}) => {
    let {title,content,author,createtime} = blogData
    let sql = `insert into blogs (title, content, author, createtime) values ('${title}', '${content}' , '${author}', '${createtime}')`
    return exec(sql).then(res=>{
        return {
            id: res.insertId
        }
    })
}

const updateBlog = (id, blogData = {}) => {
    let {title,content,author} = blogData
    let sql = `update blogs set  title = '${title}', content = '${content}' where id = ${id} and author='${author}'`
    return exec(sql).then(result=>{
        return result.affectedRows > 0;
    })
}

const deleteBlog = (id, author) => {
    let sql = `delete from blogs where id = '${id}' and author='${author}'`
    return exec(sql).then(result=>{
        return result.affectedRows > 0
    })
}


module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}