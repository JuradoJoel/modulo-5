const {check} = require('express-validator');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('email')
    .notEmpty()
    .withMessage('El email es requerido'),

    check('color')
    .notEmpty()
    .withMessage('El color es requerido'),

    check('age')
    .notEmpty().withMessage('Debes indicar la edad')
    .isInt().withMessage('La edad debe ser un número')
    ,       
]