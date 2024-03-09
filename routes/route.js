const express = require('express');
const router = express.Router();

const model = require('../models/models.js');

router.get('/get', async (req, res) => {
    try {
        const users = await model.find();
        res.json(users);
    } catch (error) {    
        res.status(500).json({ message: error.message });
    }
});

router.post('/post', async (req, res) => {
    const newUser = new model({
        name: req.body.name,
        age: req.body.age
    });

    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/get/:id', async (req, res) => {
    try {
        const user = await model.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/put/:id', async (req, res) => {
    try {
        const user = await model.findById(req.params.id);
        user.name = req.body.name;
        user.age = req.body.age;
        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedUser = await model.findByIdAndDelete(req.params.id);
        res.send(`User ${deletedUser.name} deleted`);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
