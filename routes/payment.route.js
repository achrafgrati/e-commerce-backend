const express = require('express');
const router = express.Router();
const stripe = require('stripe');
const Stripe =
    stripe('sk_test_51NXU0FCqIQdyzyfI4yhZLDQGm534pyPaJ6sbKfbsAxqScIsiFXjmxBo2ri9vPXQBvcmhnv5yC30B5Pv1pnyEtsPm00rMWKILTw');
router.post('/', async (req, res) => {
        //console.log(req.body)
        let status, error;
        const { token, amount } = req.body;
        try {
            await Stripe.charges.create({
                source: token.id,
                amount,
                currency: 'usd',
            });
            status = 'success';
        } catch (error) {
            console.log(error);
            status = 'Failure';
        }
        res.json({ error, status });
    });
module.exports = router;