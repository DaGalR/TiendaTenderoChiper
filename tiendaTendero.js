const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
	try {}
	catch (e) {
		console.log(e);
		res.status(400).send(new Error('error handling doc'));
	}

});
