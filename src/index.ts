import express from "express";
import { mainRouter } from "./routes";
const cors = require('cors');

const server = express();
const PORT = process.env.PORT || 9090;


server.use(express.json());
server.use(express.raw())
server.use(cors())
server.use(express.urlencoded({ extended: false }));
server.use(mainRouter);




server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});