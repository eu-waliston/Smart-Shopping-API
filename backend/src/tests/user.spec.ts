import request from "supertest";
import app from "../app";

describe("Users", () => {
  it("should create a user", async () => {
    const response = await request(app).post("/users").send({
      name: "Tonton",
      email: "tonton@email.com",
    });
    console.log(response.body);
    expect(response.status).toBe(201);
  });

  it("should list users", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
