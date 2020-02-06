const isEmpty = string => {
    return string.trim() === '';
};

const isEmail = email => {
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return email.match(regex);
};

exports.validateSignup = user => {
    let errors = {};

    // Email
    if (isEmpty(user.email)) {
        errors.email = `Vous devez fournir une adresse email non vide.`;
    } else if (!isEmail(user.email)) {
        errors.email = `Vous devez fournir une adresse email valide.`;
    }

    // Password
    if (isEmpty(user.password)) {
        errors.password = `Vous devez fournir un mot de passe non vide.`;
    }

    if (user.password !== user.confirmPassword) {
        errors.confirmPassword = `Les mots de passe ne correspondent pas.`;
    }

    // Nom d'utilisateur
    if (isEmpty(user.username)) {
        errors.username = `Vous devez fournir un nom d'utilisateur non vide.`;
    }

    return {
        errors,
        valid: Object.keys(errors).length === 0
    };
};

exports.validateLogin = user => {
    let errors = {};

    if (isEmpty(user.email)) {
        errors.email = `Vous devez fournir une adresse email non vide.`;
    }

    if (isEmpty(user.password)) {
        errors.password = `Vous devez fournir un mot de passe non vide.`;
    }

    return {
        errors,
        valid: Object.keys(errors).length === 0
    };
};
