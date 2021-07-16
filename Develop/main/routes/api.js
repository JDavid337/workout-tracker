const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/bulk", ({ body }, res) => {
    /*Workout.insertMany(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })*/
    Workout.aggregate([
        { $addFields: { totalDuration: { $sum: "$exercises.duration" }}},
    ])
    .then((dbWorkouts) => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    /*Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })*/
    Workout.aggregate([
        { $addFields: { totalDuration: { $sum: "$exercise.duration" }}},
    ])
        .sort({ _id: -1})
        .limit(7)
        .then((dbWorkouts) => {
            res.json(dbWorkouts)
        })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    const { body, params } = req;
    Workout.findByIdAndUpdate(params.id, { $push: { exercise: body }})
    .then((dbWorkouts) => {
        res.json(dbWorkouts);
    })
    .catch((err) => {
        res.status(400).json(err);
    });

router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true);
    })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;
