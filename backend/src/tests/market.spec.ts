import request from "supertest";

import app from "../app";

import { authenticateUser } from "./auth.helper.js";

describe("Markets", () => {
  it("should create market", async () => {
    const token = await authenticateUser();

    const response = await request(app)
      .post("/markets")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Condor",
        city: "Curitiba",
        address: "Rua Central 123",
      });

    expect(response.status).toBe(201);

    expect(response.body.data).toHaveProperty("id");
  });

  it("should list markets", async () => {
    const token = await authenticateUser();

    const response = await request(app)
      .get("/markets")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);

    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it("should not create market without token", async () => {
    const response = await request(app).post("/markets").send({
      name: "Muffato",
      city: "Curitiba",
      address: "Rua XPTO",
    });

    expect(response.status).toBe(401);
  });

  it("should validate market fields", async () => {
    const token = await authenticateUser();

    const response = await request(app)
      .post("/markets")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "",
        city: "",
        address: "",
      });

    expect(response.status).toBe(400);

    expect(response.body.status).toBe("error");

    expect(response.body.message).toBe("Validation failed");

    expect(response.body.issues).toHaveProperty("name");
    expect(response.body.issues).toHaveProperty("city");
    expect(response.body.issues).toHaveProperty("address");
  });
});
