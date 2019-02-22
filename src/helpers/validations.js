export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

export const validatePassword = (password) => {
    // at least one number, one lowercase and one uppercase letter
    // at least six characters
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
    return re.test(password)
}