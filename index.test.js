const request = require('supertest');
const app = require("./server");

describe("Check API",  () => {

  it("Should return status 200", async () => {
    
    const response = await request(app).get("/")

    expect(response.status).toBe(200)
  })

  it("Should return alive true", async () => {
    
    const response = await request(app).get("/")

    expect(response.body.alive).toBe(true)
  })
})