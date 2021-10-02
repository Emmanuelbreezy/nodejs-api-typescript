import express from 'express';
import bodyParser from 'body-parser';
import todoRoute from './routes/todo.route';

const app = express();
app.use(bodyParser.json());
app.use(todoRoute);

app.listen({
    port: 3000
});
