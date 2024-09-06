import { body } from "express-validator";

export const userValidationRules = () => {
  return [
    body("email")
      .isEmail()
      .withMessage("Email is not valid")
      .notEmpty()
      .withMessage("Email is required"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long")
      .notEmpty()
      .withMessage("Password is required"),

    body("userDetails.role").notEmpty().withMessage("Role is required"),

    body("userDetails.name").notEmpty().withMessage("Name is required"),

    body("userDetails.profileUrl")
      .optional()
      .isURL()
      .withMessage("Profile URL is not valid"),

    body("userDetails.dob")
      .optional()
      .isISO8601()
      .toDate()
      .withMessage("Date of Birth must be a valid date"),
  ];
};
