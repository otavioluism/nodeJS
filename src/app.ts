import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json()); // habilita o formato json para o cliente HTTP entender
app.use(routes);  

export default app;
