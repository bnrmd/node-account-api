const express = require('express')
const { check, validationResult } = require('express-validator/check');
const dao = require('../persistence/account-dao');
const router = express.Router();

router.get('/', (req, res) => {
    const getResult = (err, results) => {
        if (err) res.send(err)
        else res.send(results)
    }
    dao.findAll(getResult);
});

router.get('/:id', (req, res) => {
    const getResult = (err, results) => {
        if (err) res.send(err)
        else res.send(results)
    } 
    dao.findById(req.params.id, getResult);
});

router.post('/', [
        check('type').isString().not().isEmpty(),
        check('balance').isFloat().not().isEmpty()
    ], (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ error: errors.array() });
        }

        const payload = req.body;

        const getResponse = (err, results) => {
            if (err) res.status(400).send(err)
            else res.send(results)
        }

        dao.createAccount(payload, getResponse);
    }
);

router.put('/:id', [
        check('id').not().isEmpty()
    ], (req, res) => {

        const handleResultsFn = (err, results) => {
            if (err) res.send(err)
            else res.send(results)
        }
        const query = { _id: req.params.id };
        const payload = { $set: {type: req.body.type, balance: req.body.balance }};
        console.log('Query',query)
        console.log('Payload',payload)
        // Update
        dao.update(query, payload, handleResultsFn)
    }
);

router.delete('/:id', (req, res) => {
    
});

module.exports = router;