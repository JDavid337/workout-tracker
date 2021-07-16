const router = require('express').Router();
const path = require('path');

router.get("/exercises", res => {
    res.sendFile(path.join(_dirname, '../public/exercises.html'))
});

router.get('/stats', res => {
    res.sendFile(path.join(_dirname, '../public/stats.html'))
});

module.exports = router;