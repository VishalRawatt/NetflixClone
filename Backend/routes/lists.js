const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");

//CREATE
router.post("/", verify, async (req, res) => {
    const newList = new List(req.body);
    if (req.user.isAdmin) {
        try {
            const savedList = await newList.save();
            res.status(200).json(savedList);
        } catch (err) {
            res.status(404).json("List cannot be saved");
        }
    } else {
        res.status(403).json("You are not allowed !!");
    }
})

//DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json("List is deleted successfully");
        } catch (err) {
            res.status(404).json(err);
        }
    } else {
        res.status(403).json("You are not admin so you cant delete !!");
    }
})

//GET
router.get("/", verify, async (req, res) => {
    const typeQuery = req.query.type ;
    const genreQuery = req.query.genre ;
    let list = [];

    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } }
                ]);
            } else {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery }},
                ]);
            }
        }
        else {
            list = await List.aggregate([{ $sample: { size: 10 } }]);
        }
        res.status(201).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router