import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config()

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    const message = process.env.MESSAGE;
    res.json({ message })
})

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
})