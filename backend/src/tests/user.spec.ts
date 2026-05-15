import request from "supertest";
import app from "../app";

describe("Users", () => {
  it("should create a user", async () => {
    const response = await request(app)
      .post("/users")
      .send({
        name: "Tonton",
        email: `tonton${Date.now()}@email.com`,
        password: "123456",
      });

    expect(response.status).toBe(201);
  });

  it("should list users", async () => {
    // const response = await request(app).get("/users");
    const email = `tonton${Date.now()}@email.com`;

    await request(app).post("/users").send({
      name: "Tonton",
      email,
      password: "123456",
    });

    const loginResponse = await request(app).post("/login").send({
      email,
      password: "123456",
    });

    const token = loginResponse.body.data.token;

    const response = await request(app)
      .get("/users")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);

    expect(response.body.status).toBe("success");

    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it("should not create duplicated user", async () => {
    const email = `tonton${Date.now()}@email.com`;

    await request(app).post("/users").send({
      name: "Tonton",
      email,
      password: "123456",
    });

    const response = await request(app).post("/users").send({
      name: "Outro",
      email,
      password: "123456",
    });

    expect(response.status).toBe(409);
  });

  it("should not create user with invalid email", async () => {
    const response = await request(app).post("/users").send({
      name: "Tonton",
      email: "email-invalido",
      password: "123456",
    });

    expect(response.status).toBe(400);
  });

  it("should login successfully", async () => {
    await request(app).post("/users").send({
      name: "Tonton",
      email: "login@email.com",
      password: "123456",
    });

    const response = await request(app).post("/login").send({
      email: "login@email.com",
      password: "123456",
    });

    expect(response.status).toBe(200);

    expect(response.body.data.token).toBeDefined();
  });

  it("should not access protected route without token", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toBe(401);
  });
});
