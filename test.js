var https = require('https');
var fs = require('fs');
var index = fs.readFileSync('index.html')

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

var a = https.createServer(options, function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(index);
}).listen(8000);

