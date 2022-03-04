const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();
const cors = require("cors");
const app = express();

//base de datos
dbConnection();

//CORS
app.use(cors());

//directorio publico
app.use(express.static("public"));

//lectura y parseo del body
app.use(express.json());

//routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running in localhost:${process.env.PORT}`);
});
