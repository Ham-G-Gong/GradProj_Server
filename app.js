const express = require("express");
const cors = require("cors");
const hardware = require("./routes/hardware");
const app = express();
const port = 8080;

app.use(cors());
app.use("/hardware", hardware);

app.get("/", (req, res) => {
  res.send("젯슨 서버입니당.");
});

app.listen(port, () => {
  console.log(`${port}에서 서버가 실행됐습니다.`);
});
