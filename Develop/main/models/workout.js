const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
            type: Date,
            default: Date.now
            // try code on line 10 if line 8 is not working?
            // default: () => new Date()
        },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Add an exercise routine"
        },
    name: {
        type: String,
        trim: true,
        required: "What is your exercise called?"
        },
    duration: {
        type: Number,
        required: "How long do you wish to perform this exercise?"
        },
    weight: {
        type: Number,
        },
    reps: {
        type: Number,
        },
    sets: {
        type: Number,
        },
    distance: {
        type: Number,
        },
    }],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;