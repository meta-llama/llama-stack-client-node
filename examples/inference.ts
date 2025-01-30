#!/usr/bin/env -S npm run tsn -T

const LlamaStackClient = require('llama-stack-client').default;
const client = new LlamaStackClient({ baseURL: 'http://localhost:8321' });

async function main() {
  // list models
  const models = await client.models.list();
  console.log(models);

  // non-streaming chat-completion
  const chatCompletion = await client.inference.chatCompletion({
    messages: [{ content: 'Hello, how are you?', role: 'user' }],
    model_id: 'meta-llama/Llama-3.2-3B-Instruct',
  });
  console.log(chatCompletion);

  // streaming chat-completion
  const stream = await client.inference.chatCompletion({
    messages: [{ content: 'Hello, how are you?', role: 'user' }],
    model_id: 'meta-llama/Llama-3.2-3B-Instruct',
    stream: true,
  });
  for await (const chunk of stream) {
    process.stdout.write(chunk.event.delta.text || '');
  }
  process.stdout.write('\n');
}

main();