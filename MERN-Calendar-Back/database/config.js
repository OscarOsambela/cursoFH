const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("DB online");
  } catch (error) {
    console.log(error);
    throw new Error("Error of inizialice database");
  }
};

module.exports = {
  dbConnection,
};
