import dotenv from "dotenv";
dotenv.config();
import express from "express";

// Port no coming from the env file 
const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("Hi api testing successfull");
});

app.listen(port, () => {
  console.log(`Server started at port no: ${port}🍉`);
});
