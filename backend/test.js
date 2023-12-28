import express from "express";
const port = 5500;

const app = express();
app.get("/", (req, res) => {
  res.send("api is running..");
});

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
