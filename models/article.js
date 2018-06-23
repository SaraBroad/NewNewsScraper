var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    saved: {
        type: Boolean,
        default: false
    }
});

var Article = mongoose.model("Article", articleSchema);
module.exports = Article;
