import express, { Request, Response } from 'express';
import router from './routes';

const app: express.Application = express();

app.get('/welcome', (req: Request, res: Response) => {
  res.send('welcome!');
});

app.use('/api', router);

export default app;
