import express from 'express';
// import assetsRegister from '../../controllers/assets.controller.js';
import assetsRegister from '../controllers/assets.controller.js';

const router = express.Router();

router.post ('/assets', assetsRegister);

export default router;