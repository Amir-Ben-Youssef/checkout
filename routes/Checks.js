const express = require("express");
const checks = express.Router();
const cors = require("cors");

const Check = require("../models/Check")

checks.use(cors());

checks.post('/account', (req, res) => {
    const acnt = new Check({ 

            name: req.body.userName,
            email: req.body.userEmail,
            password: req.body.userPassword,
            line1: req.body.addressOne,
            line2:req.body.addressTwo,
            city:req.body.addressCity,
            state:req.body.addressState,
            zipCode:req.body.addressZip,
            phone:req.body.Phone,
            creditCardN: req.body.CCNumber,
            expiryDate: req.body.expiryDate, 
            CVV: req.body.CVV,
            billingZipCode: req.body.CCZip
        
    })
    acnt.save(function (err) {
        if (err) {
            console.log(err)
        }
        else{
            res.status(201).json("Saved!")
        }
      });
    
})

module.exports= checks