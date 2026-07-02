const Joi = require("joi");

const registrationValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  courseTitle: Joi.string().required(),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  university: Joi.string().required(),
  sendConfirmationEmail: Joi.boolean().default(false).required(),
  note: Joi.string().optional(),
});

module.exports = registrationValidation;
