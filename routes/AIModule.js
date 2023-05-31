const express = require("express");
const router = express.Router();
const { exec, execSync } = require("child_process");
const { RunModule } = require("./service/RunModule");
const path = require("path");

let now_module;
router.get("/result", (req, res) => {
  try {
    const result = RunModule(req.body.module_name).split(" ");
    result.forEach((r) => r.trim());
    const img_name = execSync("bash scripts/getImage.sh").toString();
    res.status(200).json({ result: result, img_name: img_name });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
router.get("/list", (req, res) => {
  try {
    exec("bash scripts/getModuleList.sh", (error, data, stderr) => {
      console.log(`stdout: ${data}`);
      const result = data.split(" ");
      result.forEach((e) => e.trim());
      const now = now_module || result[0];
      res.status(200).json({ list: result, now: now });
    });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

router.patch("/now", (req, res) => {
  try {
    const result = RunModule(req.body.module_name);
    console.log(req.body.hi);
    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json("Server Error");
  }
});

module.exports = router;
