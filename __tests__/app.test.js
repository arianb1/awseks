const request = require("supertest");
const app = require("../index");

//require("dotenv").config();
const TEST_ROUTE = '/hello_route'

describe("GET /test hello route", () => {
  it("should return success", async () => {
    const res = await request(app).
            get(TEST_ROUTE);
    expect(res.statusCode).toBe(201);
    //expect(res.body.length).toBeGreaterThan(0);
    expect(res.text).toEqual('Hello');
  });
});



