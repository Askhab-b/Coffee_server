const {Router} = require('express');
const { drinksController } = require('../controllers/drinks.controller');

const router = Router()



router.get('/drinks', drinksController.getDrinks)
router.get('/drinks/instock', drinksController.getDrinksStock)
router.get('/drinks/:id', drinksController.getDrinksId)
router.post('/drinks', drinksController.postDrinks)
router.delete('/drinks/:id', drinksController.deleteDrinksId)
router.patch('/drinks/:id', drinksController.patchDrinksId)







module.exports = router 