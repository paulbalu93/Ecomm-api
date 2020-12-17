const express = require('express');
const path = require('path')
const router = express.Router();
const {readDB} = require('../../utils')
const productsPath = path.join(__dirname, "products.json")

router.route('/').get(async (req,res,next)=> {
    try {
       const products = await readDB(productsPath)
       console.log(products);
    } catch (error) {
        console.log(error);
    }
    
    })
    
    router.route('/:id').post((req,res,next)=> {
        try {
            
        } catch (error) {
            console.log(error);
        }
        
        })
    
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