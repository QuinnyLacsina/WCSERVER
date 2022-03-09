//Lacsina, Quinny Joyce Ann M.
//WD-201
//Testing express-rest and postman for adding data

const express = require('express');
const app = express();

app.use(express.json());

const movies = 
[{
    id:1,
    title:'Superman'},
{
    id:2,
    title: 'Iron Man'},
{
    id:3,
    title: 'Batman'},
{
    id:4,
    title: 'Hulk'}];


app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movie);
});

//get all movies

app.get('/api/movies', (req, res) => {
    res.send(movies);
})

//get all movies by id

app.get('/api/movies/:id', (req, res) => 
{
    const movie =  movies.find(h => h.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('Movie not listed.');
    res.send(movie);
})



app.get('/', (req, res) => {
    res.send('My New App!')
})

app.get('/api/heroes', (req, res) => {
    res.send(['Superman', 'Iron Man', 'Batman', 'Hulk', 'Ant Man']);
})

app.get('/api/heroes/:id', (req, res) => {
    res.send(req.params.id);
})

app.get('/api/heroes/:id/:publisher', (req, res) => {
    res.send([req.params.id, req.query]);
})


app.listen(3100, () => console.log('Listening on port 3100'));