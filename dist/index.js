"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const spammer_1 = require("./utils/spammer");
const cors = require('cors');
const app = Express();
app.use(cors());
app.use(Express.json());
app.get("/sms", async (req, res) => {
    const target = req.query.target;
    if (target === undefined) {
        return res.status(400).json({
            success: false,
            error: "target is undefined",
        });
    }
    const targetNumber = parseInt(target);
    if (isNaN(targetNumber)) {
        return res.status(400).json({
            success: false,
            error: "target is not a number",
        });
    }
    if (!(targetNumber > 999999999 || targetNumber < 10000000000)) {
        return res.status(400).json({
            success: false,
            error: "number should be of 10 digits",
        });
    }
    try {
        await (0, spammer_1.Spammer)(targetNumber);
        return res.status(200).json({
            success: true
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            error: "something went wrong",
        });
    }
});
app.listen(3000, () => {
    console.log(`Server is Fire at http://localhost:3000`);
});
