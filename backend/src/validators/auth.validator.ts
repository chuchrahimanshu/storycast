// Import Section
import * as yup from "yup";

// Validator Schemas
export const signUpValidator = yup.object().shape({
    firstName: yup.string().trim()
                .required("Please provide a valid First Name")
                .matches(/^[A-Za-z]+$/, {
                    message: "First Name must contain only alphabet"
                }),
    lastName: yup.string().trim()
                .required("Please provide a valid Last Name")
                .matches(/^[A-Za-z]+$/, {
                    message: "Last Name must contain only alphabet"
                }),
    email: yup.string().trim()
                .required("Please provide a valid Email Address")
                .email("Please provide a valid Email Address"),
    password: yup.string()
                .required("Please provide a valid Password")
                .matches(/^[A-Za-z0-9._!@#$%&*?]{8,30}$/, {
                    message: "Please follow all password rules"
                })
});