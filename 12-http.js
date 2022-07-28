const http = require('http');

const server = http.createServer((req, res) => {
if (req.url === '/'){
    res.end('Welcome to our home page')

}
if (req.url === '/acdbout'){
    res.end('History or about page stuff')
}
res.end(`<h1>Ooops!</h1>
<p>We Can't seem to find the page</p>
<a href="/">back home</a>
`)


})

server.listen(5000)
