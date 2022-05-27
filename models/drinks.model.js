const mongoose = require('mongoose');

const drinksSchema = mongoose.Schema({
    title: String,
    price: Number,
    available: Boolean,
    caffeine: Boolean,
    Volume: Number,
    description: String
});

const Drink = mongoose.model('Drink', drinksSchema);

module.exports = Drink;