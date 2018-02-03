const express = require('express');
const router = express.Router();

// Handle GET request for workout page.
router.get('/', (req, res, next) => {
    res.render('workout', {
        title: 'Test',
        greeting: 'user'
    }); // Looks for workout.ejs file under 'views' folder.
});

module.exports = router;