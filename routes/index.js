const express = require('express');
const router = express.Router();

// Handle GET request for index page.
router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Test',
        greeting: 'user'
    }); // Looks for index.ejs file under 'views' folder.
});

module.exports = router;