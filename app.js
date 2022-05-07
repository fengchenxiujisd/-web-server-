const blogRouter = require('./src/router/blog');
const userRouter = require('./src/router/user');
const qs = require('node:querystring');
const getPostData = (req)=>{
    return new Promise(((resolve, reject) => {
    if(req.method !== 'POST'){
        resolve({})
        // return
    }
    if(req.headers['content-type']!== 'application/json'){
        resolve({})
        // return
    }
        let postData = ''
        req.on('data', chunk=>{
            postData += chunk.toString()
        })
        req.on('end', err=>{
            reject(err)
        })
        req.on('end', ()=>{
            if(postData === ''){
                reject({})
                return
            }
            //这里让postData变成对象类型
            resolve(JSON.parse(postData))
        })
    }))
}

module.exports = (req,res)=>{
    req.path = req.url.split('?')[0]
    //将查询对象绑定到query属性上
        req.query = qs.parse(req.url.split("?")[1])
        getPostData(req).then(postData=>{

        // post的数据绑定到body属性上
        req.body = postData;

        const blogRes = blogRouter(req,res);
        // const userRes = userRouter(req,res);

        if(blogRes){
            blogRes.then((postData)=>{
                res.end(JSON.stringify(postData))
            })
        }
        // if(blogRes){
        //     res.end(JSON.stringify(blogRes))
        //     return
        // }else if(userRes){
        //     res.end(JSON.stringify({
        //         userRes
        //     }))
        //     return
        // }
            return
    })

    // res.statusCode = 404
    // res.setHeader('Content-type','text/plain')
    // res.end('error request.')
}