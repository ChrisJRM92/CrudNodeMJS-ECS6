import express from 'express'
import helmet from 'helmet';
import cors from 'cors'
import router from './presentation/routes/index.mjs'
import dotenv from 'dotenv'

dotenv.config()
const app = express();

app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req, res) => {
    return res.send("Welcome to express!");
})

export default app;