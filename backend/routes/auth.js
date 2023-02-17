const express = require("express");
const router = express.Router();

router.route('/login').post((req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log("test");

});

module.exports = router;