const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const hardware = require("./routes/HardwareInfo");
const ai_module = require("./routes/AIModule");
const app = express();
const port = 8080;
const img_folder_path =
  "../../../lpcvc/23LPCVC_Segmentation_Track-Sample_Solution/evaluation/";
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(
  "/pre_image",
  express.static(path.join(__dirname, img_folder_path, "/test_img_RGB"))
);
app.use(
  "/post_image",
  express.static(path.join(__dirname, img_folder_path, "/evalDirectory_RGB"))
);
app.use("/hardware", hardware);
app.use("/ai_module", ai_module);

app.get("/", (req, res) => {
  res.send("젯슨 서버입니당.");
});

app.listen(port, () => {
  console.log(`${port}에서 서버가 실행됐습니다.`);
});
