const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    fs.readFile("message.txt", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Error reading the file");
      }

      const messages = data.toString().split("\n").filter(Boolean);
      const lastMessage = messages[messages.length - 1];

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write("<body>");
      res.write(`<div><h2>Last Message: ${lastMessage}</h2></div>`);

      res.write(
        '<form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">Send</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<html><head><title>Welcome home</title></head><body><h1>Welcome home</h1></body></html>"
    );
    return res.end();
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.appendFile("message.txt", message + "\n", (err) => {
        if (err) {
          res.writeHead(500);
          return res.end("Error writing to file");
        }
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<html><head><title>About Us</title></head><body><h1>Welcome to About Us page</h1></body></html>"
    );
    return res.end();
  } else if (url === "/node") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<html><head><title>My Node Js project</title></head><body><h1>Welcome to my Node Js project</h1></body></html>"
    );
    return res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(
      "<html><head><title>404 Not Found</title></head><body><h1>404 Not Found</h1></body></html>"
    );
    return res.end();
  }
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
