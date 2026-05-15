import request from "supertest";
import app from "../app";

describe("Users", () => {
  it("should create a user", async () => {
    const response = await request(app)
      .post("/users")
      .send({
        name: "Tonton",
        email: `tonton${Date.now()}@email.com`,
      });

    expect(response.status).toBe(201);
  });

  it("should list users", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toBe(200);

    expect(response.body.status).toBe("success");

    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it("should not create duplicated user", async () => {
    const email = `tonton${Date.now()}@email.com`;

    await request(app).post("/users").send({
      name: "Tonton",
      email,
    });

    const response = await request(app).post("/users").send({
      name: "Outro",
      email,
    });

    expect(response.status).toBe(409);
  });

  it("should not create user with invalid email", async () => {
    const response = await request(app).post("/users").send({
      name: "Tonton",
      email: "email-invalido",
    });

    expect(response.status).toBe(400);
  });
});
