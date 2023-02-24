const { Schema, model } = require("mogoose");
const userSchema = require("./User");

const Schema = mongoose.Schema;

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    username: [userSchema],
  },

  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
