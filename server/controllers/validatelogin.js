import Joi from 'joi';
const validatelogin= (user) => {
    const validation = {
        username:Joi.string().min(3).required(),
        password:Joi.string().min(8).required()
    };

    return Joi.validate(user, validation);
};
module.exports=validatelogin;