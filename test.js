//import http module
const http = require('http');

//create a web server using createServer method
const server = http.createServer((req, res) => {
    res.write('<h1>Hello world</h1>');
    res.end();
});

//listen on port 5000
server.listen(5000, 'localhost', () => {
    console.log('Server is running');
});
