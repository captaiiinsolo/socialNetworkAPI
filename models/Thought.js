const { Schema, model } = require("mogoose");
const dayjs = require("dayjs");


const Schema = mongoose.Schema;

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },

    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dayjs(createdAtVal).format("MMM DD, YYYY [at] HH:mm:ss"),
    },
  }
)

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

    username: {
      type: String,
      required: true,
    },

    reactions: [reactionSchema],
  },

  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Thought = model("Thought", ThoughtSchema);

ThoughtSchema.virtuals.reactionCount = function () {
  return this.reactions.length;
}

module.exports = Thought;
