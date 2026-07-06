import dotenv from "dotenv"
import express, { type Express, type Request, type Response } from 'express';
import { cors } from './config/cors';
import { apiRoutes } from './routes';
import { globalErrorHandler } from './middleware/error';
import { notFound } from './middleware/notFound';
dotenv.config()
const app: Express = express();



app.use(express.json())
app.use(cors)


app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({
        title: "Welcome to my Express app",
    });
});

app.use("/api/v1", apiRoutes)


app.use(globalErrorHandler)
app.use(notFound)

export default app