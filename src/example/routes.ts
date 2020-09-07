import service from './service';
import express from 'express';

const router = express.Router();

router
    .route('/')
    .get((req, res) => res.send(service.hello()));

export default router;
