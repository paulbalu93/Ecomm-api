const express = require('express');
const path = require('path');
const router = express.Router();
const { readDB, writeDB } = require('../../utils');
const uniqid = require('uniqid');
const { readJSON } = require('fs-extra');
const productsPath = path.join(__dirname, 'products.json');

router.route('/').get(async (req, res, next) => {
	try {
        let products = await readDB(productsPath);
		// console.log(req.query);
		// if (req.query) {

        // }
        for (key in req.query)
        {
            console.log(req.query[key])
            products = products.filter((product)=> !product[key] ? product : product[key].toString() === req.query[key]) //toSting()
        }
		
		res.send(products);
	} catch (error) {
		console.log(error);
	}
});

router.route('/').get(async (req, res, next) => {
	try {
		const products = await readDB(productsPath);
		res.send(products);
	} catch (error) {
		console.log(error);
	}
});

router.route('/').post(async (req, res, next) => {
	try {
		const products = await readDB(productsPath);
		const newProduct = {
			...req.body,
			_id: uniqid(),
		};
		products.push(newProduct);
		await writeDB(productsPath, products);
		res.send(newProduct);
		console.log(req.body);
	} catch (error) {
		console.log(error);
	}
});
router.route('/:id').get(async (req, res, next) => {
	try {
		const products = await readDB(productsPath);
		const productByID = products.find((product) => req.params.id === product._id);
		res.send(productByID);
	} catch (error) {
		console.log(error);
	}
});

router.route('/:id').put(async (req, res, next) => {
	try {
		const products = await readDB(productsPath);
		const update = products.map((product) =>
			req.params.id === product._id ? { ...product, ...req.body } : product
		);
		await writeDB(productsPath, update);
		res.send('ok');
	} catch (error) {
		console.log(error);
	}
});
router.route('/:id').delete((req, res, next) => {
	try {
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
