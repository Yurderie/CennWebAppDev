let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//connect to our books model
let Book = require('../models/books');
let bookController = require('../controllers/book');
//GET ROUTE for the book list page  -READ OPERATION
router.get('/', bookController.displayBookList);


/*GET route for displaying the Add Page - CREATE Operation*/
router.get('/add', bookController.displayAddPage);


/*POST route for processing the Add Page - CREATE Operation*/
router.post('/add',bookController.processAddPage);

/*GET route for displaying the Edit Page - UPDATE Operation*/
router.get('/edit/:id', bookController.displayEditPage);

/*POST route for processing the Edit Page - UPDATE Operation*/
router.post('/edit/:id', bookController.processEditPage);

/*GET to perform Deletion - DELETE Operation*/
router.get('/delete/:id', bookController.performDelete);

module.exports=router;