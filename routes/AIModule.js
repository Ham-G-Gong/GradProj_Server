const express = require("express");
const router = express.Router();
const { exec } = require("child_process");

router.get("/list", (req, res) => {
  try {
    exec("bash scripts/getModuleList.sh", (error, data, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${data}`);
      const result = data.split(" ");
      result.forEach((e) => e.trim());
      console.log(result);
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

router.get("/now", (req, res) => {
  try {
    exec("bash scripts/getNowModule.sh", (error, data, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${data}`);
      const result = data.trim();
      console.log(result);
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
