const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateNews(data) {
    let errors = {};

    // Convert empty fields to an empty string, so we can use validator functions
    data.title = !isEmpty(data.title) ? data.title : "";
    data.news = !isEmpty(data.news) ? data.news : "";

    // Name checks
    if (Validator.isEmpty(data.title)) {
        errors.title = "Title field is required";
    }
    if (Validator.isEmpty(data.news)) {
        errors.news = "News field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
