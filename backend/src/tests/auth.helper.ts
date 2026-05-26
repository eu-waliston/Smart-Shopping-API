import request from "supertest";

import app from "../app";

export async function authenticateUser() {
  const user = {
    name: "Tonton",
    email: `user${Date.now()}@email.com`,
    password: "123456",
  };

  await request(app).post("/users").send(user);

  const loginResponse = await request(app).post("/login").send({
    email: user.email,
    password: user.password,
  });

  return loginResponse.body.data.token;
}
