import app from "../src/server";
import request from "supertest";

describe("[POST] /donation", () => {
  it("Should return status 400 when exits empty fields", async () => {
    const donation = {
      name: "",
      email: "string@hotmail.com",
      phone: "",
      deviceCount: 1,
      devices: [
        {
          type: "Notebook",
          condition: "working",
        },
      ],
    };

    const response = await request(app)
      .post("/donation")
      .send(donation)
      .set("Accept", "application/json")
      .expect(400);

    expect(response.body.errorMessage).toBe(
      "All mandatory fields must be informed"
    );
  });

  it("Should return 400 when send a invalid email", async () => {
    const donation = {
      name: "string",
      email: "stringhotmail.com",
      phone: "string",
      deviceCount: 1,
      devices: [
        {
          type: "Notebook",
          condition: "working",
        },
      ],
    };

    const response = await request(app)
      .post("/donation")
      .send(donation)
      .set("Accept", "application/json")
      .expect(400);

    expect(response.body.errorMessage).toBe("Email invalid!");
  });

  it("Should return status 400 when not send devices", async () => {
    const donation = {
      name: "string",
      email: "string@hotmail.com",
      phone: "string",
      deviceCount: 1,
      devices: [],
    };

    const response = await request(app)
      .post("/donation")
      .send(donation)
      .set("Accept", "application/json")
      .expect(400);

    expect(response.body.errorMessage).toBe(
      "All mandatory fields must be informed"
    );
  });

  it("Should return status 400 when the number of devices is different from the one mentioned ", async () => {
    const donation = {
      name: "string",
      email: "string@hotmail.com",
      phone: "string",
      deviceCount: 2,
      devices: [
        {
          type: "Notebook",
          condition: "working",
        },
      ],
    };

    const response = await request(app)
      .post("/donation")
      .send(donation)
      .set("Accept", "application/json")
      .expect(400);

    expect(response.body.errorMessage).toBe(
      "The amount of equipment 2 does not match the information of equipment sent 1"
    );
  });

  it("Should return 400 when type device is invalid", async () => {
    const donation = {
      name: "string",
      email: "string@hotmail.com",
      phone: "string",
      deviceCount: 1,
      devices: [
        {
          type: "Sabonete",
          condition: "working",
        },
      ],
    };

    const response = await request(app)
      .post("/donation")
      .send(donation)
      .set("Accept", "application/json")
      .expect(400);

    expect(response.body.errorMessage).toBe("Sabonete is not a valid type");
  });

  it("Should return 200 ", async () => {
    const donation = {
      name: "string",
      email: "string@hotmail.com",
      phone: "string",
      deviceCount: 1,
      devices: [
        {
          type: "Notebook",
          condition: "working",
        },
      ],
    };

    const response = await request(app)
      .post("/donation")
      .send(donation)
      .set("Accept", "application/json")
      .expect(200);

    expect(response.body.success).toBeTruthy();
  });
});
