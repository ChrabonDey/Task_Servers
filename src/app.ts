import express from "express"
import cors from "cors"
import { taskRoute } from "./modules/task.route";

const app = express();

app.use(
  cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Task management system');
});

app.use("/api/task",taskRoute)

export default app;
