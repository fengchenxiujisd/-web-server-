class BaseModel{
    constructor(data = {}, message = "") {
        if(typeof data === 'string'){
            this.message = data;
            this.data = null;
        }else {
            this.data = data
            this.message = message
        }
    }
}

class SuccessModel extends BaseModel{
    constructor(data, message ) {
        super(data, message);
        this.errno = 0;
    }
}

class FailModel extends BaseModel{
    constructor(data, message) {
        super(data, message);
        this.errno = -1
    }
}

module.exports = {
    SuccessModel,
    FailModel
}