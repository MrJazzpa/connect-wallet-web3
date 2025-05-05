const express = require('express');
const router = express.Router();
const controllPages = require('../controller/control_pages');

router.get('/',controllPages.home);
router.get('/features',controllPages.features);
router.get('/wallets',controllPages.wallet);

module.exports = router;