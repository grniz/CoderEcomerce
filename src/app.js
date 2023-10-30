import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import * as dotenv from "dotenv";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";

import userRouter from "./routes/users.router.js";
import productRouter from "./routes/product.router.js";
import sessionsRouter from './routes/sessions.router.js';
import __dirname from './utils.js';

dotenv.config();
const app = express();
app.use(cookieParser("P1r4t3S3cr3t"));

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 8080;

const SwaggerOptions = {
  definition:{
    openapi:"3.0.1",
    info:{
      title:"ecomerce API",
      description:"Documentacion ecomerce Info",
    },
  },
  apis: [`${__dirname}/docs/**/*.yaml`],
};

const specs = swaggerJsdoc(SwaggerOptions);

app.use(express.static(__dirname + "public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




const environment = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
};
environment();

app.use("/api/sessions", sessionsRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));


const server = app.listen(PORT, () => {
  console.log(`servidor escuchando desde el puerto ${PORT}!`);
});

server.on("error", (err) => {
  console.error(err);
});