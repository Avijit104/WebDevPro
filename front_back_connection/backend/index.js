import dotenv from "dotenv";
import express, { json } from "express";

dotenv.config({
  path: "./.env",
});
const port = process.env.PORT || 3010;

const app = express();

app.use(express.json({ limit: "16kb" }));
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke 1",
      content: "this is joke 1",
    },
    {
      id: 2,
      title: "joke 2",
      content: "this is joke 2",
    },
    {
      id: 3,
      title: "joke 3",
      content: "this is joke 3",
    },
    {
      id: 4,
      title: "joke 4",
      content: "this is joke 4",
    },
    {
      id: 5,
      title: "joke 5",
      content: "this is joke 5",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`server is listining to port ${port}`);
});
