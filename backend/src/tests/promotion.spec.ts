import request from "supertest";

import app from "../app";

import { authenticateUser } from "./auth.helper.js";

describe("Promotions", () => {
  it("should create promotion", async () => {
    const token = await authenticateUser();

    const marketResponse = await request(app)
      .post("/markets")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Condor",
        city: "Curitiba",
        address: "Rua Central",
      });

    const marketId = marketResponse.body.data.id;

    const response = await request(app)
      .post("/promotions")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Coca-Cola 2L",
        category: "bebidas",
        price: 9.99,
        marketId,
      });

    expect(response.status).toBe(201);

    expect(response.body.data).toHaveProperty("id");
  });

  it("should list promotions", async () => {
    const token = await authenticateUser();

    const response = await request(app)
      .get("/promotions")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);

    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it("should filter promotions by category", async () => {
    const token = await authenticateUser();

    const response = await request(app)
      .get("/promotions/category/bebidas")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);

    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it("should not create promotion without token", async () => {
    const response = await request(app).post("/promotions").send({
      title: "Arroz",
      category: "alimentos",
      price: 19.99,
    });

    expect(response.status).toBe(401);
  });

  it("should validate promotion fields", async () => {
    const token = await authenticateUser();

    const response = await request(app)
      .post("/promotions")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "",
        price: -1,
      });

    expect(response.status).toBe(400);
  });
});
