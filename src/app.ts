import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import config from './config/config';
import {exampleRoutes} from "./example";

const app = express();
app.set('port', config.port);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(exampleRoutes);

export default app;
