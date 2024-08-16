import Express from "express";
import { Request, Response } from "express";

const app = Express();
app.use(Express.json());

app.get("/", async (req: Request, res: Response) => {});
