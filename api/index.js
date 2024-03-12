import express from "express";
import config from "./config.js";
import mongoConnection from "./model/connection.js";
import blogRouter from './router/blogRouter.js'
import cors from "cors";

// Building the app.
const app = express();

// Mongo connection.
mongoConnection();

// Middlewares.
app.use(express.json());
app.use(
  cors({
    origin: config.frontUrl,
    credentials: true,
  })
);

// Routes.
app.use("/api/blog", blogRouter);

app.listen(config.severPort, () => {
  console.log(`Server is runing in port: ${config["severPort"]}`);
});
