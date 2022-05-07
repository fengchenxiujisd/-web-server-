const {loginCheck} = require('../controller/user');

const user = (req,res)=>{
    const path = req.url.split('?')[0];
    const method = req.method;
    if(method === 'GET'){
    }

    if(method === 'POST' && path === '/api/user/login'){
        let {username, password} = req.body
        loginCheck(username, password)
    }
}

module.exports = user