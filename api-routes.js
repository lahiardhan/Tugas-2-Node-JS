const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.json({
		status: "API Its working",
		message: "Welcome to Tugas 2 Node JS CRUD Backend App",
	});
});

const SiswaController = require("./siswaController");
router.route("/daftarSiswa")
.get(SiswaController.index)
.post(SiswaController.new);

router.route("daftarSiswa/:siswa_id")
.get(SiswaController.view)
.patch(SiswaController.update)
.put(SiswaController.update)
.delete(SiswaController.delete)

module.exports = router;
