const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method); // 'method' instead of 'methods'
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>"); // Fixed closing tag </Title> to </title>

  res.write("<body><h1>Sanjay</h1></body>"); // Fixed extra "<" before "h1"
  res.write("</html>");
  res.end();
});

server.listen(4000);
