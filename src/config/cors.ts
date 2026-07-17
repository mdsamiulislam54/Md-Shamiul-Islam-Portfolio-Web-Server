import createCors from "cors";


export const cors = createCors({
  origin: function (origin, callback) {
    const allowedOrigins = ["http://localhost:3000","https://md-shamiul-islam-portfolio-web-server.onrender.com"];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});