import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

//this is for public folder on path /
app.use('/public', express.static('public'));

// This is a method to use JSON
//app.use(express.json());
app.use(express.urlencoded({extended: true}));

//this is for images folder on path images
app.use('/images', express.static('images'));

app.get('/', (req,res) => {
    // get data first
    res.json(data)
});

app.post('/newItem', (req,res) => {
    console.log(req.body);
    res.send(data);
})

app.route('/item')
    .get((req,res) => {
        res.send(`a get request with /item route on port ${PORT}`)
    })
    .put((req,res) => {
        res.send(`a put request with /newItem route on port ${PORT}`)
    })
    .delete((req,res) =>{
        res.send(`a delete request with /item route on port ${PORT}`)
    });


app.get('/item/:id', (req, res, next) => {
    //This is the middleware that pulls the data
    console.log(req.params.id);
    let user = Number(req.params.id); //converts the string output that returns from console.log to Number
    console.log(user);
    console.log(data[user]);
    //middleware that uses the req object
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    //everything above is middleware
    res.send(data[user]);
    next();
}, (req, res)=>{
    console.log('Did you get the right data?');
});

// app.get('/images', (req, res) =>{
//     res.download('images/rocket.jpg')
//     //res.redirect('http://www.linkedin.com')
// });

app.post('/newItem', (req,res) => {
    res.send(`a post request with /newItem route on port ${PORT}`)
});

app.put('/item', (req,res) => {
    res.send(`a put request with /item route on port ${PORT}`)
});

app.delete('/item', (req,res) => {
    res.send(`a delete request with /item route on port ${PORT}`)
});

app.listen(PORT, () =>{
    console.log(`Your server is running on port ${PORT}`)
    console.log(data);
});