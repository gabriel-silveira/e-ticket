const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('e-ticket.html'));

module.exports = router;