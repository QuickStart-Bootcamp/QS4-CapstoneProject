import 'dotenv/config';
import Anthropic from '@anthropic-ai/sdk';

const apiKey = process.env.CLAUDE_API_KEY;

if (!apiKey) {
  throw new Error('CLAUDE_API_KEY is missing. Add it to server/.env');
}

const claude = new Anthropic({ apiKey });

export default claude;