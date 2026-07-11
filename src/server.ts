import app from "./app"
import dotenv from "dotenv";
dotenv.config();


const port = process.env.PORT || 8000

async function bootstrap() {
    try {
        
        app.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error)
        process.exit(1)
    }
}

bootstrap()