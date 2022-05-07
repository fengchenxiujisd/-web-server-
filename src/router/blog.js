const {SuccessModel, FailModel} = require('../model/resModel')
const {getList, getDetail, newBlog, updateBlog} = require('../controller/blog')

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
            return {
                msg: '博客详情的接口'
            }
        }
    }else if(method === 'POST') {
        if (path === '/api/blog/new') {
            return {
                msg: '新建博客接口'
            }
        }else if(path === '/api/blog/del'){
            return {
                msg: '删除博客'
            }
        }else if(path=== '/api/blog/update'){
            return {
                msg: '更新博客'
            }
        }
    }
}

module.exports = blog