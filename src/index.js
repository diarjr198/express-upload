import express from "express";
import dotenv from "dotenv";
import upload_route from "./routes/upload_route.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.use(express.static("../public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(upload_route);

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
