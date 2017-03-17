var Sequelize = require('sequelize');
export default callback => {
    // connect to a database if needed, then pass it to `callback`:
    var db = new Sequelize('user', 'root', '123');
    var user = db.define('user', {
        username: Sequelize.STRING,
        firstname: Sequelize.STRING,
        lastname: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING
    });
    callback(user);
}
