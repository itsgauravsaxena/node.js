import { Router } from 'express';

import db from '../database.js';

export const userRouter = Router();

userRouter.get('/', async (req, res) => {
    const users = await db('users');
    console.log(req.query);

    res.send(users);
});

userRouter.get('/:id', async (req, res) => {
    // const { id } = req.params;
    const id = req.params.id;
    const [user] = await db('users').where({ id });

    if(!user){
        return res.status(404).send();
    }

    res.send(user);
});

userRouter.post('/', async (req, res) => {
    const user = req.body;
    
    try {
        await db('users').insert(user);
    } catch(err){
        return res.status(400).send(err);
    }
    
    res.send('ok');
});
