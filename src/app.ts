import express from 'express';
import helmet from 'helmet';
import config from './config/config';
import {exampleRoutes} from './example';

const app = express();
app.set('port', config.port);
app.use(helmet());

app.use(exampleRoutes);

export default app;
