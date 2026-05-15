import { errorMiddleware } from "./middlewares/error.middleware";

import express from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger";

import { userRoutes } from "./routes/user.routes";

const app = express();

app.use(errorMiddleware);
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(userRoutes);

app.get("/health", (req, res) => {
  return res.status(200).json({
    status: "ok",
  });
});

export default app;
