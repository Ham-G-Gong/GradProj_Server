const express = require("express");
const cors = require("cors");
const hardware = require("./routes/HardwareInfo");
const ai_module = require("./routes/AIModule");
const app = express();
const port = 8080;

app.use(cors());
app.use("/hardware", hardware);
app.use("/ai_module", ai_module);

app.get("/", (req, res) => {
  res.send("젯슨 서버입니당.");
});

app.listen(port, () => {
  console.log(`${port}에서 서버가 실행됐습니다.`);
});
