import express from 'express';
import bodyParser from 'body-parser';
import { setMessagesRoutes } from './routes/messagesRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

setMessagesRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});