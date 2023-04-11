//Importación a travez de modulos
const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5);
const nombre = Joi.string().min(5);
const pathImg = Joi.string().base64();
const fecha_creacion = Joi.date();

const createUserSchema = Joi.object({
  nombre: nombre.required(),
  email: email.required(),
  password: password.required(),
  role: role.required(),
  fecha_creacion: fecha_creacion.required(),
  pathImg: pathImg
});

const updateUserSchema = Joi.object({
  nombre: nombre.required(),
  email: email.required(),
  password: password.required(),
  role: role.required(),
  pathImg: pathImg
});

const userValidationById = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, userValidationById }
