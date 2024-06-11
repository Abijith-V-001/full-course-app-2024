const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "title": String,
        "description": String,
        "startdate":String,
        "duration": String,
        "venue": String,
        "trainer": String
    }
)
let coursemodel = model = mongoose.model("courses", schema);
module.exports = { coursemodel }