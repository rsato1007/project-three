const mongoose = require("mongoose");

const schema = new mongoose.Schema ({
    Name: {type: string, required: true},
    Email: {type: Email, required: true},
    Password: {type: string, required: true},
    Bio: {type: string},
});


export default schema;