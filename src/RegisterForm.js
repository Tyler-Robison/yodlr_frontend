import { useFormik } from "formik";
import registerValidate from "./registerValidate";
import yodlrAPI from "./API";
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const validate = registerValidate;
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validate,
        onSubmit: values => signup(values),
    })

    const signup = async (values) => {
        try {
            const res = await yodlrAPI.register(values)
            console.log('register res', res)
            formik.resetForm();
            navigate('/');
        } catch (err) {
            // setfailureMsg(true)
            formik.resetForm();
        }
    }

    return (
        <div>
            <h1>Enter User Info</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div><label htmlFor="firstName">First Name</label></div>
                    <input
                        id="firstName"
                        name="firstName"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        placeholder="First Name"
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                        <div>{formik.errors.firstName}</div>
                    )}
                </div>
                <div>
                    <div><label htmlFor="lastName">Last Name</label></div>
                    <input
                        id="lastName"
                        name="lastName"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        placeholder="Last Name"
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                        <div>{formik.errors.lastName}</div>
                    )}
                </div>
                <div>
                    <div><label htmlFor="email">E-mail</label></div>
                    <input
                        id="email"
                        name="email"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="E-mail"
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div>{formik.errors.email}</div>
                    )}
                </div>
                <button className="general-btn SignupForm-btn" type="submit">Sign-up</button>
            </form>

        </div>
    )
}

export default RegisterForm;