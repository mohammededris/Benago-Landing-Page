const Joi = require("joi");

const registrationValidation = Joi.object({
  courseId: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  courseTitle: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  university: Joi.string().required(),
  sendConfirmationEmail: Joi.boolean().default(false).required(),
  note: Joi.string().allow("").optional(),
});

module.exports = registrationValidation;
