import express from 'express';
import noteRoutes from './routes/note.routes';
import { errorHandler } from './utils/errorHandler';

const app = express();

app.use(express.json());
app.use('/notes', noteRoutes);
app.use(errorHandler);

export default app;
