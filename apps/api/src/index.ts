import express from "express";

const app = express();

app.get("/test", (_req, res) => {
  res.json({ aaa: 1 });
});

app.listen(3000, () => console.log("Listening on :3000"));
