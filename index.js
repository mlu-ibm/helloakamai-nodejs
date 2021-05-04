const express = require('express');
const app = express();
const fs = require('fs');

app.get('/akamai.html', (req, res) => {
  console.log('received a request.');
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.readFile('./sureroute-test-object.html', null, function(error, data) {
    if (error) {
      res.writeHead(404);
      res.write('File not found');
    } else {
      res.write(data);
    } 
    res.send();
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port ', port);
});
