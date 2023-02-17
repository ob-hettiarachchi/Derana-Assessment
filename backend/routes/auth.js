const express = require("express");
const router = express.Router();

// config
const Keys = require("../config/Keys");

// validation
const validateLoginInput = require("../validation/login");

router.route('/login').post((req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    const {errors, isValid} = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }


    console.log("test");

});

module.exports = router;