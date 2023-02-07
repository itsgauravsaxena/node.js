import express from 'express';
import bodyParser from 'body-parser';
import { userRouter } from './routes/users.js';

const app  = express();
const port = 3000;

app.use(express.json());
// app.use(bodyParser.urlencoded());
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello world');
});