let Siswa = require("./siswaModel");

exports.index = function (req, res) {
	Siswa.get((err, siswa) => {
		if (err) {
			res.json({
				status: "error",
				message: err,
			})
		}
		res.json({
			status: "success",
			message: "Daftar Siswa retrieved successfully",
			data: siswa,
		});
	});
}

exports.new = function (req, res) {
	let siswa = new Siswa();
	siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
	siswa.tanggalLahir = req.body.tanggalLahir;
	siswa.jenisKelamin = req.body.jenisKelamin;
	siswa.hobi = req.body.hobi;
	siswa
		.save()
		.then((data) => {
			res.json({
				status: "success",
				message: "new siswa added",
				Siswa: data,
			})
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Internal Server Error",
			});
		});
}

exports.view = function (req, res) {
	Siswa.findById(req.params.siswa_id, (err, siswa) => {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			message: "Daftar Siswa detail loading...",
			data: siswa,
		});
	});
}

exports.update = function (req, res) {
	Siswa.findById(req.params.siswa_id, (err, siswa) => {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
		siswa.tanggalLahir = req.body.tanggalLahir;
		siswa.jenisKelamin = req.body.jenisKelamin;
		siswa.hobi = req.body.hobi;
		siswa.save((err) => {
			if (err) {
				res.json({
					status: "error",
					message: err,
				});
			}
			res.json({
				message: "Siswa info updated!",
				data: siswa,
			});
		});
	});
}

exports.delete = function (req,res) {
   Siswa.remove({
      _id:req.params.siswa_id
   }, 
   (err, siswa) => {
      if(err) {
         res.send(err);
      }
      res.json({
         status: "Success",
         message: "delete siswa success"
      })
   })
}