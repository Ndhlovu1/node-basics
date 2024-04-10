const http = require('http')

//CUSTOM FILES
const requestHadler = require ('./routes')
const routes = require('./routes')

// const server = http.createServer((req, res) => {
//     //console.log(req.url, req.method, req.headers)
//     //Hard-Exit the listening process : Not Recommended
//     // process.exit()

// })

const server = http.createServer(routes.handler)

server.listen(4000)
