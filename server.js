require("dotenv").config();
const express = require("express");
const app = express();

const helloRoute = require("./src/routes/user_route");

app.use("", helloRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
