const express = require("express");
const router = express.Router();
const { exec } = require("child_process");

let hw_status = {
  CPU: ["", "", "", ""],
  GPU: "",
  MEM: "",
  S_MEM: "",
  PLL_T: "",
  CPU_T: "",
  PMIC_T: "",
  GPU_T: "",
  AO_T: "",
  Therm_T: "",
  DISK: ["", "", ""],
};

router.get("/", (req, res) => {
  try {
    exec("bash scripts/getHWInfo.sh", (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);

      let [
        CPU,
        GPU,
        MEM,
        S_MEM,
        PLL_T,
        CPU_T,
        PMIC_T,
        GPU_T,
        AO_T,
        Therm_T,
        DISK,
      ] = stdout.split("\n");
      hw_status.CPU = CPU.slice(1, -1)
        .split(/\%\@[0-9]+\,?/)
        .slice(0, -1);
      hw_status.GPU = GPU.slice(0, -1);
      hw_status.MEM = MEM.slice(0, -2).split("/");
      hw_status.S_MEM = S_MEM.slice(0, -2).split("/");
      hw_status.PLL_T = PLL_T.slice(4, -1);
      hw_status.CPU_T = CPU_T.slice(4, -1);
      hw_status.PMIC_T = PMIC_T.slice(5, -1);
      hw_status.GPU_T = GPU_T.slice(4, -1);
      hw_status.AO_T = AO_T.slice(3, -1);
      hw_status.Therm_T = Therm_T.slice(8, -1);
      hw_status.DISK = DISK.split(" ");
      res.status(200).send(hw_status);
    });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
