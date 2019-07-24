// export配置  调整webpack配置 可参考https://cli.vuejs.org/zh/guide/webpack.html#简单的配置方式

module.exports = {
    configureWebpack: {
        // 给开发服务器做选项传递
        devServer: {
            // 修改默认端口号
            proxy:'localhost:8081',
            // 做个前置中间件，在开发服务器启动之前进行监听，相当于一个服务器，可以mock数据
            before(app) {
                app.get('/api/goods', function(req,res){
                    // 返回数据，code是状态
                    res.json({
                       code:0,
                       list:[
                        {id:1, text:'wdd', price:'22'},
                        {id:2, text:'ewwd', price:'232'}
                       ]     
                    })
                })
            }
        }
    }
}