const express = require("express");
const router = express.Router();

// models
const News = require("../models/News");

// middlewares
const auth = require("../middleware/check-auth");

// validation
const validateNews = require("../validation/news");

router.route('/news').post(auth.isAuthenticated, (req, res, next) => {

    if (req.role === "admin") {


        const {errors, isValid} = validateNews(req.body);

        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const addNews = new News({
            title: req.body.title,
            news: req.body.news
        });

        addNews.save().then(response => {
            return res
                .status(200)
                .json(response);
        }).catch(err => {
            console.log(err);
            return res
                .status(404)
                .json({internalError: "Error saving record"});
        })

    } else {
        res.status(403).json({server: "Unauthorized"})
    }

});

router.route('/news-count').get((req, res, next) => {

    News.find({email: req.email}).count().then((data) => {
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(200).json(0);
        }
    }).catch((err) => {
        next(err);
        return res
            .status(404)
            .json({internalError: "Unexpected error occurred! Please try again."});
    })


})

router.route('/news/:page').get((req, res, next) => {

    let page = req.params.page;
    let skip = (page - 1) * 6;

    // find news and backend pagination
    News.find({}).sort({"_id": -1}).skip(skip).limit(6).then((data) => {
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(200).json(null);
        }
    }).catch((err) => {
        next(err);
        return res
            .status(404)
            .json({internalError: "Unexpected error occurred! Please try again."});
    })


});

router.route('/news/:id').delete(auth.isAuthenticated, (req, res, next) => {
    if (req.role === "admin") {

        let id = req.params.id;

        News.deleteOne({_id: id}).then(response => {
            return res
                .status(200)
                .json(response);
        }).catch(err => {
            next(err);
            return res
                .status(404)
                .json({internalError: "Unexpected error occurred! Please try again."});
        })

    } else {
        res.status(403).json({server: "Unauthorized"})
    }

});

router.route('/news-id/:id').get((req, res, next) => {

    let id = req.params.id;
    News.findOne({_id: id}).then((data) => {
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(200).json(null);
        }
    }).catch((err) => {
        next(err);
        return res
            .status(404)
            .json({internalError: "Unexpected error occurred! Please try again."});
    })

});

router.route('/news/:id').put(auth.isAuthenticated, (req, res, next) => {
    if (req.role === "admin") {

        let id = req.params.id;

        const {errors, isValid} = validateNews(req.body);

        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }

        News.updateOne({_id: id}, {
            title: req.body.title,
            news: req.body.news
        }).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            next(err);
            res.status(500).json(err);
        })

    } else {
        res.status(403).json({server: "Unauthorized"})
    }

});

module.exports = router;