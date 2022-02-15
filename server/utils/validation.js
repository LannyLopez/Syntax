const validation = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {};
    if (username.trim() === '') {
        errors.username = 'Username cannot be empty';
    }
    if(email.trim() === '') {
        errors.email = 'Email cannot be empty';
    } else {
        const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!email.match(validEmail)){
            errors.email = 'Email must be a valid email address!';
        }
    }
    if(password === ''){
        errors.password = 'Password is required!';
    } else if (password !== confirmPassword){
        errors.confirmPassword = 'Passwords must match';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
};

export default validation;