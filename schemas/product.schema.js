const Joi = require('joi');

const id = Joi.string().id();
const title = Joi.string().min(3).max(15);
const completed = Joi.boolean();
const nombre = Joi.string().min(3).max(15);


const createProductSchema = Joi.object({
  title: title.required(),
  completed: completed
});

const updateProductSchema = Joi.object({
  title: title,
  completed: completed,
  nombre: nombre,
});

const productValidationById = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, productValidationById };
