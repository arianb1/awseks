//npm i -D jest supertest
const request = require("supertest");
const app = require("../index");

describe("GET /test hello route", () => {
  test("should return success", async () => {
    const res = await request(app).get('/hello_route');
    expect(res.statusCode).toBe(201);
    expect(res.text).toEqual('Hello');
  });
});

// describe("POST /api/products", () => {
//     it("should create a product", async () => {
//       const res = await request(app).post("/api/products").send({
//         name: "Product 2",
//         price: 1009,
//         description: "Description 2",
//       });
//       expect(res.statusCode).toBe(201);
//       expect(res.body.name).toBe("Product 2");
//     });
//   });