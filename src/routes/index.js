import { version } from '../../package.json';
import express from 'express';
import user from '../controller/user.js';

export default ({ config, db }) => {
    console.log(user)
    let api = express();
    api.post('/user/register', (req, res, next) => {
        let data = req.body;
        api.post(user({ db, data, res, next, api }));
    });

    api.get('/', (req, res) => {
        res.json({ version });
    });

    return api;
}
