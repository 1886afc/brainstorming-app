// Requiring Dependencies
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


//Load idea Model
require('../models/Idea');
const Idea = mongoose.model('ideas');

// Idea Index page
router.get('/', (req, res) => {
    Idea.find({})
        .sort({date:'desc'})
        .then(ideas => {
            res.render('ideas/index', {
                ideas:ideas
            });
        });
});

//Add Idea Form
router.get('/add', (req, res) =>{
    res.render('ideas/add');
});

//edit idea form
router.get('/edit/:id', (req, res) =>{
    Idea.findOne({
        _id: req.params.id
    })
        .then(idea =>{
            res.render('ideas/edit', {
                idea:idea
            });
        });
});

// Process form
router.post('/', (req, res)=>{

    // validation
    let errors = [];
    if(!req.body.title){
        errors.push({text:'Please add a title'});
    }
    if(!req.body.details){
        errors.push({text:'Please add details'});
    }

    if(errors.length > 0){
        res.render('/add', {
            errors: errors,
            title: req.body.title,
            detail: req.body.details
        });
    }else {
        const newUser = {
            title: req.body.title,
            details: req.body.details
        };
        new Idea(newUser)
            .save()
            .then(idea => {
                // Flash Msg letting user nkow they added idea
                req.flash('success_msg', 'Added brainstorming idea!');
                res.redirect('/ideas');
            })

    }
});

// Edit form process
router.put('/:id', (req, res) =>{
    Idea.findOne({
        _id: req.params.id
    })
        .then(idea => {
            // New Values
            idea.title = req.body.title;
            idea.details = req.body.details;

            //saving the update
            idea.save()
                .then(idea =>{
                    // Flash Msg letting user nkow they edited idea
                    req.flash('success_msg', 'Idea successfully edited!');
                    res.redirect('/ideas');
                })
        });
});

// Delete idea
router.delete('/:id', (req, res) => {
    Idea.remove({_id:req.params.id})
        .then(() => {
            // Flash msg alerting user idea deleted
            req.flash('success_msg', 'Brainstorming idea removed');
            res.redirect('/ideas');
        })
});

// Exporting the router
module.exports = router;