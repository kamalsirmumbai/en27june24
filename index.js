const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
	
app.post("/sem", (req, res) => {
	let data = [req.body.name, req.body.phone, req.body.query ];
	console.log(data);

	let name = req.body.name;
 	let txt = "phone = " + req.body.phone + " query = " + req.body.query;
 
	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth : {
			user: "tester18april24@gmail.com",
			pass: "sfrfslgqgsokkcqb"
		}
	})

	let mailOptions = {
		from : "tester18april24@gmail.com",
		to : "classeskamalsir@gmail.com",
		subject: "Enquiry from " + name,
		text : txt
	}

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			console.log("mail err ", err);
			res.status(500).json(err);
		}
		else {
			console.log("mail send" , info.response);
			res.status(200).json("mail send");
		}
	})


});

app.listen(9000, () => { console.log("ready @ 9000"); } );