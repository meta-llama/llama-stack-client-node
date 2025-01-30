#!/usr/bin/env -S npm run tsn -T

import LlamaStackClient from 'llama-stack-client';

const client = new LlamaStackClient({ baseURL: 'http://localhost:8321' });

async function main() {
  // list models
  const models = await client.models.list();
  console.log(models);

  // chat completion
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

  for await (const inferenceChatCompletionResponse of stream) {
    process.stdout.write(inferenceChatCompletionResponse.event.delta.text || '');
  }
  process.stdout.write('\n');

}


main();
