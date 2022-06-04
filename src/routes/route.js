
const myHelper = require('../util/helper')
const underscore = require('underscore')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})
router.get('/movies',function(req, res){
let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
res.send(movies)
})
router.get('/movies/:indexNumber',function(req, res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let moviesindex = req.params.indexNumber
    let finalMovies = "";
    if (moviesindex < movies.length) {
    finalMovies =("Movies does not exist" + movies.length)
        res.send(finalMovies)
    }
})
router.get('/films', function(req, res){
    let arr = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        "id": 2,
        'name':' Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
       'name': 'Finding Nemo'
       }]
       res.send(arr)
       
});
router.get('/films/:filmId', function(req, res){
    let arr = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        "id": 2,
        'name':' Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
       'name': 'Finding Nemo'
       }]
       filmindex= req.params.filmId
       function idLoolookup(x){
           return x.Id;
       }
       letgetId= arr.map(idLoolookup)
        let finalFilm="";
        if(filmindex <= getId.length){
            finalFilm = arr[filmindex-1]

        }else{
    finalFilm=("Please enter number equal to or below:="+ getId.length+"Because no movies exist with the entered id")
        }
})
module.exports = router;
// adding this comment for no reason