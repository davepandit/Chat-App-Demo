import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectToDB } from "./config/db.js";

// routers import
import userRouter from "./routes/user.routes.js";

// connect to DB
connectToDB();

// Port no coming from the env file
const port = process.env.PORT;
const app = express();

// configs
app.use(express.json());

app.get("/api/users", (req, res) => {
  res.status(200).json({ name: "Dave", age: 20, cool_name: "cereal coder" });
});

// routes -->

// userRouter
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server started at port no: ${port}🍉`);
});
