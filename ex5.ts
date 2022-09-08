import express, { Request, Response } from 'express';
import crypto from "crypto";

const app = express();

app.use((req: Request, res: Response, next: Function) => {
    const hash = crypto.createHash('sha256').update(req.body).digest('base64')
    res.status(200).send(JSON.stringify({ "hash": hash }));
    next();
});

export { }