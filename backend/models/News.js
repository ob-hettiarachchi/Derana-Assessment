const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    news: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const News = mongoose.model("news", NewsSchema);
module.exports = News;