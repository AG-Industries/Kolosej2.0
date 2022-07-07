import express from "express";
import cors from "cors";
import moviesRoute from './routes/movies.js'

const app = express();

app.use(cors());

app.use("/movies", moviesRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port: http://localhost:${PORT}`)
})