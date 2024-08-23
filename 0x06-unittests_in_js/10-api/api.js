const express = require('express');
const app = express();

app.use(express.json());

const PORT = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
    res.json({
        payment_methods: {
            credit_card: true,
            paypal: false,
        },
    });
});

app.get('/login', (req, res) => {
    const { userName } = req.body;
    if (userName) {
        res.send(`Welcome ${userName}`);
    } else {
        res.send('Please provide a username');
    }
});

const server = app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = server;