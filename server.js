const http = require("http");
const { execSync } = require("child_process");

const hostname = "127.0.0.1";
const port = 5050;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  switch (req.url) {
    case "/install-clang":
      execSync("apt -o DPkg::Options::=--force-confdef install clang -y");
      res.end(JSON.stringify({ status: "finished" }));
      break;
    case "/install-java":
      execSync("apt -o DPkg::Options::=--force-confdef install openjdk-17 -y");
			res.end(JSON.stringify({ status: "finished" }));
      break;
    case "/install-csharp":
      execSync("apt -o DPkg::Options::=--force-confdef install mono -y");
			res.end(JSON.stringify({ status: "finished" }));
      break;
    default:
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
