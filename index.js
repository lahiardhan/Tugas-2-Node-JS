const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("express");
const port = 8000;
const apiRouter = require("./api-routes");

app.get("/", (req, res) => {
	res.send("Tugas 2 Node JS CRUD");
});

app.use("/api", apiRouter);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/daftarSiswa");
const db = mongoose.connection;

app.listen(port, () => {
   console.log(`server berjalan di localhost:${port}`)
});