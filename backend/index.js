import dotenv from "dotenv";
dotenv.config();
import express from "express";

// Port no coming from the env file
const port = process.env.PORT;
const app = express();

app.get("/api/users", (req, res) => {
  res.status(200).json({ name: "Dave", age: 20, cool_name: "cereal coder" });
});

app.listen(port, () => {
  console.log(`Server started at port no: ${port}🍉`);
});
