const registerValidate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'First Name Required';
    } else if (values.firstName.length > 25) {
        errors.firstName = 'First Name must be 25 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'First Name Required';
    } else if (values.lastName.length > 25) {
        errors.lastName = 'Last Name must be 25 characters or less';
    }

    if (!values.email) {
        errors.email = 'E-mail Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }


    return errors;
};

export default registerValidate