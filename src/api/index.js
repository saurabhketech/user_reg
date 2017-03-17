import { version } from '../../package.json';
import express from 'express';
import user from '../controller/user.js';

export default ({ config, db }) => {
    let api = express();
    api.post('/user/register', (req, res, next) => {
        let data = req.body;
        api.post(user({ config, db, data }, function(result) {
            res.json(result);
        }));
    });

    api.get('/', (req, res) => {
        res.json({ version });
    });

    return api;
}
