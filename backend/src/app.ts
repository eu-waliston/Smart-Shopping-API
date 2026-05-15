import { errorMiddleware } from "./middlewares/error.middleware";

import express from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger";

import { userRoutes } from "./routes/user.routes";
import { authRoutes } from "./routes/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(authRoutes);

app.use(userRoutes);

app.get("/health", (req, res) => {
  return res.status(200).json({
    status: "ok",
  });
});

app.use(errorMiddleware);

export default app;
