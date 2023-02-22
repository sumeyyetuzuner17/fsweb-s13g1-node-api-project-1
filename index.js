
const server = require('./api/server');

const port = 9002;

// START YOUR SERVER HERE
server.listen(port,()=>{
    console.log("server is working at "+port);
});