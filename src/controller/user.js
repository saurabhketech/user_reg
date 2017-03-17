export default ({ db, data, res, next }) => {

    db.sync({ force: false }).then(function() {
        return db.create({
            username: data.user_name,
            firstname: data.first_name,
            lastname: data.last_name,
            password: data.password,
            email: data.email
        })
    }).then(function(data) {
        if (data) {
            res.json({ status: 1, message: "record inserted" });
            next();
        }
    })
    return true;
}
