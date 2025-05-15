import { Request, Response } from 'express';
import { SupabaseService } from '../services/supabaseService';
import { Message } from '../types/message';

export class MessagesController {
  private supabaseService: SupabaseService;

  constructor() {
    this.supabaseService = new SupabaseService();
  }

  public async createMessage(req: Request, res: Response): Promise<void> {
    const { content }: Message = req.body;

    if (!content) {
      res.status(400).json({ error: 'Content is required' });
      return;
    }

    try {
      const message = await this.supabaseService.insertMessage({ content });
      res.status(201).json(message);
    } catch (error) {
      res.status(500).json({ error: 'Failed to save message' });
    }
  }

  public async getMessages(req: Request, res: Response): Promise<void> {
    try {
      const messages = await this.supabaseService.fetchMessages();
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve messages' });
    }
  }
}