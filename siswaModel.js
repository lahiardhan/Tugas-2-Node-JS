const mongoose = require("mongoose");
const SiswaSchema = mongoose.Schema({
	"nama": {
		type: String,
		required: true,
	},
	"tanggalLahir": {
		type: String,
		required: true,
	},
	"jenisKelamin": {
		type: String,
		required: true,
	},
	"hobi": String,
});

const Siswa = (module.exports = mongoose.model("siswa", SiswaSchema));
module.exports.get = (callback, limit) => {
	Siswa.find(callback).limit(limit);
};
