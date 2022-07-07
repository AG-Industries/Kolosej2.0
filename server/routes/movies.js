import express from 'express'
import { getMovies } from '../controllers/getMovies.js';

const router = express.Router();

router.get("/", getMovies)

export default router;