// index.js

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Connection from "./database/db.js";
import routes from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

Connection();

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} successfully`);
});
