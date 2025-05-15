import { createClient } from '@supabase/supabase-js';
import { Message } from '../types/message';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

export class SupabaseService {
  async insertMessage(message: Message): Promise<void> {
    const { data, error } = await supabase
      .from('messages')
      .insert([message]);

    if (error) {
      throw new Error(`Error inserting message: ${error.message}`);
    }
  }

  async fetchMessages(): Promise<Message[]> {
    const { data, error } = await supabase
      .from('messages')
      .select('*');

    if (error) {
      throw new Error(`Error fetching messages: ${error.message}`);
    }

    return data as Message[];
  }
}