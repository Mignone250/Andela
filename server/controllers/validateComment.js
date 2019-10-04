import Joi from 'joi';
const validateArticle= (article) => {
    const validation = {
        comment:Joi.string().min(15).required()
    };

    return Joi.validate(article, validation);
};
module.exports=validateArticle;
