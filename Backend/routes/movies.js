const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");

//CREATE
router.post("/", verify, async (req, res) => {
    const newMovie = new Movie(req.body) ;
    if (req.user.isAdmin) {
        try {
            const savedMovie = await newMovie.save();
            res.status(200).json(savedMovie);
        } catch (err) {
            res.status(404).json("Movie cannot be saved");
        }
    } else {
        res.status(403).json("You are not allowed !!");
    }
})

//UPDATE
router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
                $set:req.body,
            },
            {new : true }
            );
            res.status(200).json(updatedMovie);
        } catch (err) {
            res.status(404).json(err);
        }
    } else {
        res.status(403).json("You are not allowed !!");
    }
})

//DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        await Movie.findByIdAndDelete(req.params.id) ;
        res.status(201).json("Movie is deleted successfully")
    } else {
        res.status(403).json("You are not admin !!");
    }
})

//GET
router.get("/find/:id", verify, async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.id) ;
        res.status(201).json(movie) ;
    } catch(err) {
        res.status(403).json(err);
    }
})

//GET Random Movie
router.get("/random", verify, async (req, res) => {
    const type = req.query.type ;
    let movie ;
    try{
       if(type === "series"){
        movie = await  Movie.aggregate([
            {$match: {isSeries: true}},
            {$sample: {size:1}},
        ])
       }
       else{
        movie = await  Movie.aggregate([
            {$match: {isSeries: false}},
            {$sample: {size:1}},
        ])
       }
       res.status(200).json(movie) ;    
    } catch(err) {
        res.status(403).json(err);
    }
})

module.exports = router