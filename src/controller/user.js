export default ({ config, db, data, res, next }) => {
    var username = data.user_name;
    var password = data.password;
    var cpassword = data.confirm_password;
    var email = data.email;
    var firstname = data.first_name;
    var lastname = data.last_name;
    if ((username.length > 0) && (password.length > 0) && (cpassword.length > 0) && (email.length > 0) && (firstname.length > 0) && (lastname.length > 0)) {
        db.sync({ force: false }).then(function() {
            return db.create({
                username: username,
                firstname: firstname,
                lastname: lastname,
                password: password,
                email: email
            })
        }).then(function(data) {
            if (data) {
                res.json({ status: 1, message: "record inserted" });
                next();
            }
        })
    } else {
        res.json({ status: 1, message: "fields are missing" })
        next();
    }
    return true;
}
