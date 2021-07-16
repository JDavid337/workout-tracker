const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Fitness-Tracker", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});