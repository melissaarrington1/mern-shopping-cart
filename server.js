const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

//body parser middleware
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

//connect to mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/items", items);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on Port ${PORT}`);
});
