const {SuccessModel, FailModel} = require('../model/resModel')
const {getList, getDetail, newBlog, updateBlog, deleteBlog} = require('../controller/blog')

const blog = (req, res)=>{
    const method = req.method;
    const path = req.path

    if(method === 'GET' ){
        if(path === '/api/blog/list'){
            const {author, keyword} = req.query;
            const result = getList(author,keyword);
            return result.then(listData=>{
                return new SuccessModel(listData)
            })
        }else if(path === '/api/blog/detail'){
            const {id} = req.query;
            const result = getDetail(id);
            return result.then(listData=>{
                return new SuccessModel(listData)
            })
        }
    }else if(method === 'POST') {
        if (path === '/api/blog/new') {
            let blogData = {}
            let {title, content, author} = req.body
            blogData.title = title
            blogData.content = content
            blogData.author = author
            blogData.createtime = Date.now()
            const result = newBlog(blogData)
            return result.then(result=>{
                return new SuccessModel(result)
            })
        }else if(path === '/api/blog/del'){
            const author = '01'
            const result = deleteBlog(req.query.id, author)
            return result.then(result=>{
                return result
            })
        }else if(path=== '/api/blog/update'){
            // let blogData = {}
            // let {title, content,author} = req.body
            // let {id} = req.query
            // blogData.title = title
            // blogData.content = content
            const result = updateBlog(req.query.id, req.body)
            return result.then(result=>{
                return result
            })
        }
    }
}

module.exports = blog