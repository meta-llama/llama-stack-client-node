// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LlamaStackClient from 'llama-stack-client';
import { Response } from 'node-fetch';

const client = new LlamaStackClient({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource batchInference', () => {
  test('chatCompletion: only required params', async () => {
    const responsePromise = client.batchInference.chatCompletion({
      messages_batch: [[{ content: 'string', role: 'user' }]],
      model: 'model',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('chatCompletion: required and optional params', async () => {
    const response = await client.batchInference.chatCompletion({
      messages_batch: [[{ content: 'string', role: 'user', context: 'string' }]],
      model: 'model',
      logprobs: { top_k: 0 },
      response_format: { json_schema: { foo: true }, type: 'json_schema' },
      sampling_params: { strategy: { type: 'greedy' }, max_tokens: 0, repetition_penalty: 0 },
      tool_choice: 'auto',
      tool_prompt_format: 'json',
      tools: [
        {
          tool_name: 'brave_search',
          description: 'description',
          parameters: {
            foo: { param_type: 'param_type', default: true, description: 'description', required: true },
          },
        },
      ],
    });
  });

  test('completion: only required params', async () => {
    const responsePromise = client.batchInference.completion({ content_batch: ['string'], model: 'model' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('completion: required and optional params', async () => {
    const response = await client.batchInference.completion({
      content_batch: ['string'],
      model: 'model',
      logprobs: { top_k: 0 },
      response_format: { json_schema: { foo: true }, type: 'json_schema' },
      sampling_params: { strategy: { type: 'greedy' }, max_tokens: 0, repetition_penalty: 0 },
    });
  });
});
