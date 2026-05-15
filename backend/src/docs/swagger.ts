import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Smart Shopping API",
      version: "1.0.0",
    },
  },
  apis: ["./src/router/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
