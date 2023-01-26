import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-router";
import router from "./routes/user-router";
const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://admin:Jeevanpuru1@cluster0.k5gj2d3.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .then(() => {
    console.log("Connected to DataBase and Listening To Localhost 5000");
  })
  .catch((err) => console.log(err));
