const db = require("..models");

module.exports = {
    findAll: function(req, res) {
        db.GoogleBooks
        .find(req.query)
    }
}