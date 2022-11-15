const express = require('express');
const Employees = require('../models/employees.model');

const router = express.Router();


router.get('/employees', (req, res) => {
    try{
        Employees.find((err, data) => {
            if(err){
                return res.status(400).send({message: 'Error while retrieving employees. Please check the data'})
            }

            res.status(200).send(data);
        })
    }catch(error){
        res.status(500).send({
            message: 'Internal Server Error'
        })
    }
});

router.get('/employees/:empID', (req, res) => {
    try{
        Employees.findOne({_id: req.params.empID}, (err, data) => {
            if(err){
                return res.status(400).send({message: 'Error while retrieving an employee. Please check the data'})
            }

            res.status(200).send(data);
        })
    }catch(error){
        res.status(500).send({
            message: 'Internal Server Error'
        })
    }
});

router.post('/employees', async (req, res) => {
    try{
        const payload = req.body;

        const newEmployee = new Employees(payload);

        await newEmployee.save((err, data)=> {
            if(err){
                return res.status(400).send({message: 'Error while adding new employee. Please check the data'});
            }

            res.status(201).send({employeeId: data._id, message: "Employee has been added successfully." })
        })

    }catch(error){
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
});

router.put('/employees/:empID', (req, res) => {
    try{
        Employees.findByIdAndUpdate({_id: req.params.empID}, {$set: req.body}, (err, data) =>{
            if(err){
                return res.status(400).send({message: 'Error while updating an existing user. Please check the data'})
            }

            res.status(201).send({employeeId: data._id, message: "Employee details have been updated."})
        })

    }catch(error){
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
});

router.delete('/employees/:empID', (req, res) => {
    try{
        Employees.deleteOne({_id: req.params.empID}, (err, data) => {
            if(err){
                return res.status(400).send('Error while deleting an employee. Please check the data');
            }

            res.status(200).send({message : `Employee with id ${req.params.empID} has been deleted.`})
        })
    }catch(error){
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
});



module.exports = router;