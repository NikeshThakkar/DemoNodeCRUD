const { body } = require('express-validator');
const users = require('../model/UserModel').default;

 const signInBodyValidate = [
    body('email').isEmail().normalizeEmail().custom(value =>{
        return users.query().where('email',value).andWhere('isActive',true).first().then(res => {
            if(res){
                throw new Error('Email is already exist.');
            }
           return value; 
        })
    })
];

 const signUpBodyValidate = [
    body('firstName').notEmpty().withMessage('first name is required.').isString().isLength({ min: 3 }).withMessage('must be at last 3 chars long.'),
    body('lastName').notEmpty().withMessage('last name is required.').isString().isLength({ min: 3 }).withMessage('must be at last 3 chars long.'),
    body('email').isEmail().normalizeEmail().custom(value =>{
        return users.query().where('email',value).andWhere('isActive',true).first().then(res => {
            if(res){
                throw new Error('Email is already exist.');
            }
           return value; 
        })
    }),
];

module.exports = { signInBodyValidate, signUpBodyValidate };