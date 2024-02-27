const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<html><head><title>Welcome home</title></head><body><h1>Welcome home</h1></body></html>"
    );
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<html><head><title>About Us</title></head><body><h1>Welcome to About Us page</h1></body></html>"
    );
    res.end();
  } else if (url === "/node") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<html><head><title>My Node Js project</title></head><body><h1>Welcome to my Node Js project</h1></body></html>"
    );
    res.end();
  } 
  else if(url==="/"){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<html><head><title>My Node Js project</title></head><body><h1>Welcome to my Node Js project</h1></body></html>"
    );
    res.end();


  }
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
