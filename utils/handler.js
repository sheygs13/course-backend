import Joi from "@hapi/joi";

export default function validateCourse(course) {
  const schema = Joi.object({ name: Joi.string().min(3).required() });
  return schema.validate(course);
}
