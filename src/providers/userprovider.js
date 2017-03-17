import user from '../controller/user.js';
export default ({ db, data, res, next, api }) => {
    var username = data.user_name;
    var password = data.password;
    var cpassword = data.confirm_password;
    var email = data.email;
    var firstname = data.first_name;
    var lastname = data.last_name;
    if ((username.length > 0) && (password.length > 0) && (cpassword.length > 0) && (email.length > 0) && (firstname.length > 0) && (lastname.length > 0)) {
        if (password == cpassword) {
            api.post(user({ db, data, res, next, api }));
        }
    } else {
        res.json({ status: 1, message: "fields are missing" })
        next();
    }
    return true;
}
