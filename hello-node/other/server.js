// 引入http
var http = require('http')
// 使用工具来进行解析携带数据
const querystring = require('querystring')

//--------------------------------------处理post请求-------------------------------------
const postSend = function (req, res) {
  var postData = ''
  console.log(222)
  // req.params
  // 监听请求的data 数据
  // 数据会以流的方式传输
  req.on('data', chunk => {
    postData += chunk.toString()
  })

  // 数据传输结束后，会读取end方法
  req.on('end', () => {
    res.data = postData
    console.log(res)
    // 6.使用res.end() 把内容响应给客户端
    // response.end(res)
  })
}

//---------------------------------------处理get请求-----------------------------------
const getSend = function (req, res) {
  // 2.设置默认的响应内容为404 Not found
  const url = req.url
  const path = url.split('?')[1]
  console.log(path, 222)
  console.log(url, 1111)
  console.log(req.query, 333)
  let content = '<h1>404 Not found!</h1>'
  // 3.根据不同的路径响应不同的内容
  if (url === '/' || url === '/index') {
    content = '<h1>首页</h1>'
  } else if (url === '/about') {
    content = '<h1>关于页面</h1>'
  }
  res.end(content)
}

//request请求事件和response响应事件
const server = http.createServer(function (request, response) {
  //设置Content-Type 响应头，防止中文乱码
  response.setHeader('content-Type', 'application/json;charset=utf-8') //设置请求头
  // response.writeHead(200, { "Content-Type": "text/plain" });

  //判断请求方式
  const method = request.method
  // 请求方式
  if (method === 'POST') {
    postSend(request, response)
  } else if (method === 'GET') {
    getSend(request, response)
  }
})
server.listen(8080) // 端口

//终端打印如下信息;
console.log('服务器运行成功')
