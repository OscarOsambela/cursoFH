const express = require("express");

const app = express();
const PORT = 5000;

//routes
app.get("/", (req, res) => {
  console.log("se requiere el /");
  res.json({
    ok: true,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running in localhost:${PORT}`);
});
