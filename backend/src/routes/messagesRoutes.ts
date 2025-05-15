import { Router } from 'express';
import MessagesController from '../controllers/messagesController';

const router = Router();
const messagesController = new MessagesController();

export default function setMessagesRoutes(app) {
  app.use('/api/messages', router);

  router.post('/', messagesController.createMessage.bind(messagesController));
  router.get('/', messagesController.getMessages.bind(messagesController));
}