import * as Yup from "yup";


const FormSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Must be a valid email address')
        .required('Must include email address'),
    name: Yup
        .string()
        .min(4, 'Name must be atleast 4 characters long')
        .required('Must include password'),
    password: Yup
        .string()
        .min(9, 'Password must be atleast 9 characters long')
        .required('Must include letters and numbers'),   
    role: Yup
        .string()
        .oneOf(['Instructor', 'Volunteer', 'Service worker', 'Alumni'], "Please select a role"),
    serviceTerms: Yup
        .boolean()
        .oneOf([true, false], "Please select one")

})

export default FormSchema;

