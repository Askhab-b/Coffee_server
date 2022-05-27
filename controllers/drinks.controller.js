const Drink = require("../models/drinks.model")

module.exports.drinksController = {



getDrinks: (req, res) => {
Drink.find().select("_id title price" ).then((data) => {
res.json(data)
}) 
.catch((err) => res.json(err));   
},



getDrinksStock: (req, res) => {
Drink.find({
$gt: 0
}).then((data) => {
res.json(data)
})
.catch((err) => res.json(err)); 
},


getDrinksId: (req, res) => {
Drink.find().then((data) => {
res.json(data)
})
.catch((err) => res.json(err)); 
},



postDrinks: (req, res) => {
Drink.create({
title: req.body.title,
price: req.body.price,
available: req.body.available,
caffeine: req.body.caffeine,
Volume: req.body.Volume,
description: req.body.description
}).then((data) => {
res.json(data)
})
.catch((err) => res.json(err)); 
},



deleteDrinksId: (req, res) => {
Drink.findByIdAndRemove(req.params.id).then((data) => {
res.json('Напиток удалён')
})
.catch((err) => res.json(err)); 
},


patchDrinksId: (req, res) => {
Drink.findByIdAndUpdate(req.params.id).then((data) => {
res.json(data)
})
.catch((err) => res.json(err)); 
}
}