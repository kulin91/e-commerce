import express from "express";
import { getUser } from './services/users';

const app = express();
const port = 5000;

app.get("/", (_, res) => {
  console.log('Start request');
  const user = getUser('123');
  res.send(user);
  console.log('Finish request');
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
