
const express = require('express');
const path = require('path')
const router = express.Router();
const {readDB, writeDB} = require('../../utils')
const uniqid = require('uniqid')
const {readJSON} = require("fs-extra")
const productsPath = path.join(__dirname, "products.json")

router.route('/').get( async (req,res,next)=> {
    try {
       const products = await readDB(productsPath)
       res.send(products)
    } catch (error) {
        console.log(error);
    }
    
    })
    
    router.route('/').post(async(req,res,next)=> {
        try {
            
            const products = await readDB(productsPath)
          const newProduct = {

            ...req.body, _id: uniqid(),
          } ;
          products.push(newProduct) 
          await writeDB(productsPath, newProduct)
          res.send(newProduct)
        console.log(req.body)
        } catch (error) {
            console.log(error);
        }
        
        });
    
        router.route('/:id').put((req,res,next)=> {
            try {
                
            } catch (error) {
                console.log(error);
            }
            
            })
            router.route('/:id').delete((req,res,next)=> {
                try {
                    
                } catch (error) {
                    console.log(error);
                }
                
                })
            

module.exports = router;