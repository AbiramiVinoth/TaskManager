const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ["complete", "incomplete"],
        default: "incomplete"
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Users"
    }
})

const Tasks = mongoose.model("Tasks", TasksSchema);

module.exports = Tasks;