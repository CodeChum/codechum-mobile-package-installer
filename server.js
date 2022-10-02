const { execSync, exec } = require("child_process");
const express = require("express");
const app = express();
const port = 5050;

app.get("/", (req, res) => {
  res.json({ status: "running" });
});

/**
 *
 * C
 *
 */
app.get("/check-clang", (req, res) => {
  const result = execSync("which clang");
  if (result !== "") {
    return res.json({ status: "installed" });
  }

  return res.json({ status: "not-installed" });
});

app.post("/install-clang", (req, res) => {
  execSync("apt -o DPkg::Options::=--force-confdef install clang -y");
  return res.json({ status: "finished" });
});

/**
 *
 *
 * Java
 *
 */
app.post("/install-jdk", (req, res) => {
  execSync("apt -o DPkg::Options::=--force-confdef install openjdk-17 -y");
  return res.json({ status: "finished" });
});

/**
 *
 *
 * C#
 *
 */
app.get("/check-csharp", (req, res) => {
  try {
    const result = execSync("which mono");
    if (result !== "") {
      return res.json({ status: "installed" });
    }

    return res.json({ status: "not-installed" });
  } catch (e) {
    return res.json({ status: "not-installed" });
  }
});
app.post("/install-csharp", (req, res) => {
  execSync("apt -o DPkg::Options::=--force-confdef install mono -y");
  return res.json({ status: "finished" });
});

app.listen(port, () => {
  console.log(`Package Installer listening on port ${port}`);
});
