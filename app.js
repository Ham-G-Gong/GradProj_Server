const express = require("express");
const app = express();
const port = 80;
app.get("/", (req, res) => {
  res.send("서버입니당.");
});
app.listen(port, () => {
  console.log(`${port}에서 서버가 실행됐습니다.`);
});
