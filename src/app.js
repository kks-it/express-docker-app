import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import router from './routers/router.js';

const PORT = 5535;

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan('dev'));

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`🚀 Server is listening at port ${PORT}`);
})