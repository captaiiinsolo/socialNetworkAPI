const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Thought = mongoose.model("Thought", ThoughtSchema);

module.exports = Thought;