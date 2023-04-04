const request = require("supertest");
const app = require("../index");

//require("dotenv").config();
const TEST_ROUTE = '/hello_route'


describe("GET /test hello route", () => {
  it("should return success", async () => {
    const res = await request(app).get(TEST_ROUTE);
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual('Hello');
  });
});

// describe('POST /email', () => {
//     test('It should send an eamil', async () => {
//       const r = Math.random()
//         .toString(36)
//         .substring(7);
//       const response = await request(server)
//         .post('/customers')
//         .query({
//           name: r,
//           email: `${r}@${r}.com`,
//           password: 'beautiful',
//         });
//       // console.log(response.body);
//       expect(response.body).toHaveProperty('customer');
//       expect(response.body).toHaveProperty('accessToken');
//       expect(response.statusCode).toBe(200);
//     });
//   });



