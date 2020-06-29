/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';
import mongoose from 'mongoose';

import databaseConfig from './config/database';
import routes from './routes';

mongoose.connect(databaseConfig.CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(express.json())
app.use(routes);

app.listen(3333);
