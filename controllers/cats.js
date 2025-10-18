// Importing 'database'
const cats = require('../config/database.js')

const catIndex = (req, res) => {
    // Listing all cats
    res.json(cats);
};

const catShow = (req, res) => {
    // Receive catId value from request parameters object - converting to integer since it is a string
    const catId = parseInt(req.params.catId);
    // Looping through cats array to find the cat with the matching id
    const cat = cats.find((cat) => (cat.id === catId));
    // Throwing error if no matching cat
    if (!cat) return res.status(404).json({ error: "Cat not found" });
    // Returning cat if matching
    res.json(cat);
};

const catCreate = (req, res) => {
    // Deconstructing request body object with the required fields
    const { id, name, age, adopted } = req.body;
    // Assigning the fields into a new cat object
    const newCat = { id, name, age, adopted };
    // Adding the new cat object into the cats array
    cats.push(newCat);
    // Returning the newly 'created' cat
    res.status(201).json(newCat);
};

const catUpdate = (req, res) => {
    // Left as an exercise
    return
};

const catDelete = (req, res) => {
    // Left as an exercise
    return
};

module.exports = { catIndex, catShow, catCreate, catUpdate, catDelete };