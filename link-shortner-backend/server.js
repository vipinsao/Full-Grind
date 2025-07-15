import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  const { link } = req.body;
  try {
    const response = await fetch("https://api.tinyurl.com/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.TINY_URL_TOKEN}`,
        "Content-Type": "application/json",
      },
      //converting the whole object in  string
      //because the http request cant understand this
      //object type so have to convert them
      body: JSON.stringify({ url: link }),
    });
    if (!response.ok) {
      console.log("response is not good", response);
      return;
    }
    const shorter_link = await response.json();
    res
      .status(201)
      .send({ short_url: shorter_link.data.tiny_url, message: "Successfull" });
  } catch (error) {
    res
      .status(501)
      .send({ message: "There is some error", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log("The server is running at ", PORT);
});
