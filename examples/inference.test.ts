import LlamaStackClient from 'llama-stack-client';

describe('LlamaStack Client Integration Tests', () => {
  let client: LlamaStackClient;

  beforeAll(() => {
    client = new LlamaStackClient({ baseURL: 'http://localhost:8321' });
  });

  test('should list available models', async () => {
    const models = await client.models.list();
    expect(models).toBeDefined();
    expect(Array.isArray(models)).toBe(true);
  });

  test('should perform non-streaming chat completion', async () => {
    const chatCompletion = await client.inference.chatCompletion({
      messages: [{ content: 'Hello, how are you?', role: 'user' }],
      model_id: 'meta-llama/Llama-3.2-3B-Instruct',
    });
    expect(chatCompletion).toBeDefined();
    expect(chatCompletion.completion_message).toBeDefined();
  }, 30000);

  test('should perform streaming chat completion', async () => {
    const stream = await client.inference.chatCompletion({
      messages: [{ content: 'Hello, how are you?', role: 'user' }],
      model_id: 'meta-llama/Llama-3.2-3B-Instruct',
      stream: true,
    });

    const chunks: any[] = [];
    for await (const chunk of stream) {
      expect(chunk).toBeDefined();
      chunks.push(chunk);
    }
    expect(chunks.length).toBeGreaterThan(0);
  }, 30000);
});