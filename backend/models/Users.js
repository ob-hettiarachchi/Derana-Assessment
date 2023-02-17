const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        default: 'admin'
    }
});

const User = mongoose.model("users", UserSchema);
module.exports = User;