const mongoose = require("mongoose");
const config = require('./config');

const dbURL = config.db.url;

mongoose.connect(dbURL).then(() => {

    console.log("DB Connected");
}).catch((err) => {
    console.log(`DB Error ${err}`);
    process.exit(1);
});;