const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const Form = require('./models/form');

mongoose.connect('mongodb://localhost:27017/greenovate-form-data')
.then(() => console.log('Database connected'))
.catch(err => console.error('Database connection error:', err));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS Configuration
const corsOptions = {
    origin: 'http://localhost:5174', // Replace with your frontend URL
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('hello there');
});

app.post('/formData', async (req, res) => {
    try {
        const formData = req.body;
        const form = new Form(formData);
        await form.save();
        res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ message: 'Error saving form data' });
    }
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
