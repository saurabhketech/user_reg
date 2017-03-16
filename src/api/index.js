import { version } from '../../package.json';
import express from 'express';

export default ({ config, db }) => {
    let api = express();
    api.post('/user/register', (req, res, next) => {
        let data = req.body;
        var username = data.user_name;
        var password = data.password;
        var cpassword = data.confirm_password;
        var email = data.email;
        var firstname = data.first_name;
        var lastname = data.last_name;
        var result;
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
                    res.json({ status: 1, message: "record inserted" })
                    next();
                }
            })
        } else {
            res.json({ status: 0, message: "fields are missing" });
            next();
        }
    });

    //     api.use(user({ config, db, data }));
    //     var result = req.result;
    //     // res.json({ result })
    // });
    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.json({ version });
    });

    return api;
}
