import express from "express";

const app = express();

app.use("/api/test", (req, res) => {
  res.send("hello world");
});

app.listen(8800, () => {
  console.log("listening to 8800");
});
