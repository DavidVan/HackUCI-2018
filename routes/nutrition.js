const express = require('express');
const router = express.Router();

// Handle GET request for nutrition page.
router.get('/', (req, res, next) => {
    res.render('nutrition', {
        title: 'Test',
        greeting: 'user'
    }); // Looks for nutrition.ejs file under 'views' folder.
});

module.exports = router;