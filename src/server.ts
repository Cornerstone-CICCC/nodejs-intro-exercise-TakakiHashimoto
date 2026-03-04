import http from "http";

const PORT = 4000;

const server = http.createServer(
  (request: http.IncomingMessage, response: http.ServerResponse) => {
    const { url, method } = request;

    if (url === "/") {
      response.writeHead(200, { "content-type": "text/html" });
      response.write("<h1>Home</h1>");
      response.end();
      return;
    }
    if (url === "/about") {
      response.writeHead(200, { "content-type": "text/html" });
      response.write("<h1>About</h1>");
      response.end();
      return;
    }
    if (url === "/my-account") {
      response.writeHead(403, { "content-type": "text/plain" });
      response.write("You have no access to this page");
      response.end();
      return;
    }

    response.writeHead(404, { "content-type": "text/plain" });
    response.write("Page not found");
    response.end();
  },
);

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
