const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        minlength: 4,
        trim: true,
        required: true
    },
    email: {
        type: String,
        minlength: 5,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 5,
        required: true,
        trim: true,
    }
}, {
    timestamps: true
});

module.exports = model("User", userSchema);