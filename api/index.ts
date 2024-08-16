import Express from "express";
import { Request, Response } from "express";

const app = Express();
app.use(Express.json());

app.get("/", async (req: Request, res: Response) => {
  console.log(req);
  console.log(res);
});

app.listen(3000, () => {
  console.log(`Server is Fire at http://localhost: 3000`);
});
