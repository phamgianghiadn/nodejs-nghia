// require nạp thư viện
const express = require("express");
//fuction đã có săn trong thư viện
const app = express();
// run web ở cổng nào
const port = 3001;
// như định nghĩa route (tuyến đường)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//172.0.0.1 - localhost
// lắng nghe cái cổng 3000
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
