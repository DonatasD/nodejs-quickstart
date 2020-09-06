import service from './service';
import express from 'express';

const router = express.Router();

router
    .route('/example/hello')
    .get((req, res) => res.send(service.hello()));

export default router;
