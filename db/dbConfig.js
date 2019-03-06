module.exports = {
    mysql: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '12345678',
        database: 'python_test'
    },
    SUCCESS: {
        status:0,
        success:true,
        msg: 'success'
    },
    ERROR: {
        status:1,
        success:false,
        msg: 'error'
    }
}