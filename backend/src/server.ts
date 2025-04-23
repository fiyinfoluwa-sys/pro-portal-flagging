import express from 'express';
import bodyParser from 'body-parser';
import evaluateRoute from './routes/evaluate';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', evaluateRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

