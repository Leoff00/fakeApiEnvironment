import express, { Request, Response } from "express";
import data from "./data.json";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors({ methods: "GET" }));

app.get("/", (request: Request, response: Response) => {
  response.json(data);
});

app.listen(PORT, () => {
  console.log(`🔥 listening on http://localhost:${PORT} 🔥`);
});
