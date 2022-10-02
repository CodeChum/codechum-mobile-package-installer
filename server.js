const { execSync } = require("child_process");
const express = require("express");
const app = express();
const port = 5050;

app.get("/", (req, res) => {
  res.json({ status: "running" });
});

app.post("/install-clang", (req, res) => {
  execSync("apt -o DPkg::Options::=--force-confdef install clang -y");
  res.json({ status: "finished" });
});

app.post("/install-jdk", (req, res) => {
  execSync("apt -o DPkg::Options::=--force-confdef install openjdk-17 -y");
  res.json({ status: "finished" });
});

app.post("/install-csharp", (req, res) => {
  execSync("apt -o DPkg::Options::=--force-confdef install mono -y");
  res.json({ status: "finished" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
