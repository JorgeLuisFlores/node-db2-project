const express = require("express");
const carsdb = require('./cars-helper.js');
const router = express.Router();

router.get("/", (req, res) => {
    carsdb
        .get()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(404).json({
                message: "Cannot find cars!"
            });
        });
});


router.post("/", validateCar, (req, res) => {
    carsdb
        .insert(req.body)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: "Unable to post the car!"
            });
        });
});



function validateCar(req, res, next) {
    if (!req.body.VIN || !req.body.make || !req.body.model) {
        res.status(404).json({
            message: "Missing VIN, Make, and Model on for this car!"
        });
    } else {
        next();
    }
}


module.exports = router;